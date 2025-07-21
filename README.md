# 📲 Convert Your PWA to an Android App using Bubblewrap

This guide helps you turn a Progressive Web App (PWA) into a fully installable Android app using [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap). Bubblewrap is a CLI tool from Google that wraps your PWA in a Trusted Web Activity (TWA), making it publishable to the Google Play Store.

---

## 🧱 Prerequisites

Before you begin, make sure you have the following installed:

- ✅ [Node.js](https://nodejs.org) (v14+)
-Terminal prompts 
    sudo apt update
    sudo apt install nodejs npm -y


- ✅ [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) (version 11 or newer)
-Terminal prompts 
    sudo apt install openjdk-17-jdk -y


- ✅ [Android SDK](https://developer.android.com/studio) and `adb` in PATH (optional, for testing)
-Terminal prompts 
    sudo apt install android-sdk -y


- ✅ A PWA with a valid `manifest.json` hosted publicly

---

##  Validate Your PWA

Ensure your `manifest.json` contains:
- `name`, `short_name`
- `start_url`
- `display: standalone`
- `icons` (at least 192x192 and 512x512)
- `theme_color`, `background_color`

---

## 🚀 Installation

### 1. Install Bubblewrap CLI
```bash
npm install -g @bubblewrap/cli
```

Steps to Convert PWA to Android App

1. Initialize Project 
Copy the address of manifest.json in your project(web address not the local one) and paste it below instead of that 
https://yourdomain.com/...

```bash
bubblewrap init --manifest https://yourdomain.com/manifest.json
```
Fill in the required prompts like

App name, package ID (e.g., com.example.myapp)

Start URL

Theme color, background color

Path to your signing key (can generate one)

To generate a key:


keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
📍 Note: keytool comes with Java JDK.

2. Build the APK / AAB
```bash
bubblewrap build
```

You can also build an .aab for Google Play:

bubblewrap build --target aab
The output is in the /output/ directory.


🔐 SHA-256 Certificate Fingerprint Setup (for TWA)
To enable full-screen Trusted Web Activity (TWA) support, link your Android app with your website using a Digital Asset Link.

Why?
The Digital Asset Link is required to enable full-screen Trusted Web Activity (TWA) support.
This ensures your APK is verified to open your domain in full-screen mode (without browser UI), using a signed certificate.

🛠 How to Generate
If you're using Bubblewrap:

For sha 256 key use the below command
here in place of my-key-alias you should type your key-alias 
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias


If you don’t remember the alias:
You can check it by listing all aliases inside the keystore:

keytool -list -keystore ./android/keystore/android.keystore
You’ll be asked for the keystore password, and it will show:

Keystore type: JKS
Keystore provider: SUN

YourAliasNameHere, Jul 20, 2025, PrivateKeyEntry,
Certificate fingerprint (SHA-256): ...


Copy the SHA-256 fingerprint from the output.

🧩 Add to .well-known/assetlinks.json


[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "your.package.name",
      "sha256_cert_fingerprints": [
        "YOUR:SHA:256:FINGERPRINT:HERE"    <-- here add our sha-256 finger print
      ]
    }
  }
]


Host this file at:


https://yourdomain.com/.well-known/assetlinks.json
Now, your app can securely open your PWA in full-screen via TWA.