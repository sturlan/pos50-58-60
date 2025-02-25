odoo.define('pos50-58-60.models', function(require) {
    'use strict';

    const { Order } = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries');

    const PosInvoiceOrder = (Order) => class PosInvoiceOrder extends Order {
        async _finalizeValidation() {
            const result = await super._finalizeValidation();
            if (this.pos.config.auto_print_invoice && this.is_to_invoice()) {
                await this._generateAndPrintInvoice();
            }
            return result;
        }

        async _generateAndPrintInvoice() {
            const invoice = await this.pos.env.services.rpc({
                model: 'pos.order',
                method: 'generate_invoice',
                args: [this.name],
            });
            if (invoice) {
                await this.printInvoice(invoice);
            }
        }
    };

    Registries.Model.extend(Order, PosInvoiceOrder);
}); 