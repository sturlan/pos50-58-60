{
    'name': 'POS Invoice Printer (50/58/80mm)',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Auto-generate and print invoices on POS printer with multiple size options',
    'description': """
        This module adds functionality to:
        - Automatically generate invoices after POS payment
        - Print invoices on POS printer
        - Support for 50mm, 58mm, and 80mm printer sizes
    """,
    'depends': ['point_of_sale', 'account'],
    'data': [
        'security/ir.model.access.csv',
        'views/pos_config_view.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos50-58-60/static/src/js/models.js',
            'pos50-58-60/static/src/js/receipt.js',
            'pos50-58-60/static/src/xml/receipt_templates.xml',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
    'readme': 'README.md',
} 