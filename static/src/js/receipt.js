odoo.define('pos50-58-60.receipt', function(require) {
    'use strict';

    const { Printer } = require('point_of_sale.Printer');
    const Registries = require('point_of_sale.Registries');

    const PosInvoicePrinter = (Printer) => class PosInvoicePrinter extends Printer {
        async printInvoice(invoice) {
            const printerSize = this.pos.config.printer_size;
            const receiptTemplate = this.getInvoiceTemplate(printerSize);
            
            // Adjust print width based on printer size
            const printWidth = {
                '50': 32,
                '58': 38,
                '80': 48
            }[printerSize];

            const receiptData = {
                invoice: invoice,
                width: printWidth,
                company: this.pos.company,
            };

            await this.printer.print_receipt(receiptTemplate(receiptData));
        }
    };

    Registries.Component.extend(Printer, PosInvoicePrinter);
}); 