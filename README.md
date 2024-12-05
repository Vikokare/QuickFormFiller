# Auto Form Filler Chrome Extension  

## Overview  
**Auto Form Filler** is a Chrome extension that simplifies online form filling by automatically populating fields with user-provided details. Users can configure their details through the extension's options page, and the extension handles the rest.  

## Features  
- Automatically fills text and email input fields on any webpage.  
- User-friendly **Options Page** for entering and saving details.  
- Support for dynamic form fields (e.g., fields without pre-set values).  
- Real-time event triggering to ensure compatibility with interactive forms.  

## How It Works  
1. The user enters their details (e.g., name and email) in the **Options Page**.  
2. Details are securely stored using `chrome.storage.sync`.  
3. When the user navigates to a form, the extension automatically fills the fields using predefined rules (e.g., matching field names, placeholders, or class attributes).  

## Installation  
1. Clone this repository:  
   ```bash  
   git clone https://github.com/yourusername/auto-form-filler.git  
   ```  
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer mode** (toggle in the top-right corner).  
4. Click **Load unpacked** and select the project directory.  

## Usage  
1. Click on the extension icon in the Chrome toolbar and select **Options**.  
2. Enter your details (e.g., Name, Email) and save them.  
3. Navigate to any webpage with forms.  
4. The extension will automatically fill the form fields that match your stored details.  

## Files and Structure  
```plaintext  
auto-form-filler/  
│  
├── manifest.json          # Configuration for the Chrome extension  
├── options.html           # Options page for user input  
├── options.js             # Script to handle the options page logic  
├── content.js             # Content script to auto-fill forms  
├── README.md              # Documentation for the project  
└── icons/                 # Extension icons (optional)  
```

## Example Input Field Support  
The extension identifies fields based on:  
- **Name**: `name="Email"`  
- **Placeholder**: `placeholder="Enter your email"`  

## Contributing  
Contributions are welcome! If you find bugs or have ideas for new features, feel free to open an issue or submit a pull request.  

## License  
This project is licensed under the [MIT License](LICENSE).