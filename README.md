# POS Invoice Printer (50/58/80mm)

This module adds support for automatic invoice printing on POS thermal printers with different size options (50mm, 58mm, and 80mm).

## Features
- Automatic invoice generation after POS payment
- Support for multiple printer sizes (50mm, 58mm, 80mm)
- Configurable auto-print settings
- Integration with existing POS workflow

## Installation

1. Install the module through Odoo Apps menu
2. Restart your Odoo server
3. Update your apps list

## Configuration

### Access POS Settings
1. Go to **Point of Sale → Configuration → Point of Sale**
2. Select the POS you want to configure
3. Locate the "Invoice Printer Settings" section

### Configure Invoice Printer Settings
1. **Auto Print Invoice**
   - Enable this option to automatically print invoices after payment validation
   - If disabled, invoices will need to be printed manually

2. **Receipt Printer Size**
   - Select your printer size from the dropdown:
     * 50mm (32 characters per line)
     * 58mm (38 characters per line)
     * 80mm (48 characters per line)
   - Choose the size that matches your POS thermal printer specifications

### Save Settings
- Click "Save" after making your selections
- Restart your POS session to apply the changes

## Usage

### Automatic Printing
When "Auto Print Invoice" is enabled:
1. Process a sale in POS as normal
2. Complete the payment
3. The invoice will automatically print on your POS printer

### Manual Printing
If auto-print is disabled:
1. Complete the sale and payment
2. Click on the receipt button
3. Select "Print Invoice"

## Printer Size Guidelines

### 50mm Printer
- Compact receipt format
- 32 characters per line
- Ideal for small retail locations
- Best for basic invoice information

### 58mm Printer
- Standard thermal receipt size
- 38 characters per line
- Good balance of size and readability
- Most common POS printer size

### 80mm Printer
- Full-width receipts
- 48 characters per line
- Best for detailed invoices
- Ideal when more information needs to be displayed

## Troubleshooting

### Common Issues

1. **Printer Not Responding**
   - Check printer connection
   - Verify printer is powered on
   - Ensure correct printer is selected in POS settings

2. **Text Formatting Issues**
   - Verify correct printer size is selected
   - Check if receipt content fits within printer width
   - Restart POS session after changing settings

3. **Auto-Print Not Working**
   - Confirm "Auto Print Invoice" is enabled
   - Check POS user permissions
   - Verify printer connection status

## Technical Specifications
- Compatible with Odoo 17.0
- Supports standard POS thermal printers
- Integrates with existing POS workflow
- Character limits per line:
  * 50mm: 32 characters
  * 58mm: 38 characters
  * 80mm: 48 characters

## Security Notes
- Only users with appropriate POS manager rights can modify printer settings
- Settings are specific to each POS configuration
- Printer access is managed through standard POS security rules

## Support
For technical support:
- Contact your system administrator
- Check Odoo documentation
- Submit issues through your support channel 