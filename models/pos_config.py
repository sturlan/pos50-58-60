from odoo import fields, models

class PosConfig(models.Model):
    _inherit = 'pos.config'

    auto_print_invoice = fields.Boolean(
        string='Auto Print Invoice',
        default=True,
        help='Automatically print invoice after payment validation'
    )
    printer_size = fields.Selection([
        ('50', '50mm'),
        ('58', '58mm'),
        ('80', '80mm')
    ], string='Printer Size', required=True, default='80') 