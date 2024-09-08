import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                marketplace: "Marketplace",
                categories: "Categories",
                myListing: "My Listings",
                signInToYourAccount: "Sign in to your account",
                emailAddress: "Email address",
                password: "Password",
                rememberMe: "Remember me",
                forgotPassword: "Forgot password?",
                signIn: "Sign in",
                signUp: "Sign up" ,
                newtoKC: "New to Kisan Connect?",
                registerAsFarmer: "Join us and secure a stable market for your crops!",
                registerAsBuyer: "Connect with Farmers,\n Source Fresh Produce in Bulk!",
                Email: "Email Address",
                iWantTo: "I want to",
                buyProduce: "Buy Produce",
                sellProduce: "Sell Produce",
                supportingindian:"Supporting Indian Farmers through Transparent and Secure Contract Farming",
                Empowering:"Empowering Farmers, Connecting Buyers",
                GetStarted:"Get Started",
                BuyProduce:"Buy Produce",
                SellProduce:"Sell Produce",
                SignBuyProduce:"Sign Up to Buy Produce",
                FName:"First Name",
                LName:"Last Name",
                Pno:"Phone Number",
                CPassword:"Confirm Password",
                State:"State",
                City:"City",
                B_O:"Business/Organization Name",
                BAddress:"Business Address",
                iagree: "I agree to the terms and conditions",
                Register:"Register"
            }
        },
        hi: {
            translation: {
                marketplace: "बाज़ार",
                categories: "श्रेणियाँ",
                myListing: "मेरी सूचियाँ",
                signInToYourAccount: "अपने खाते में साइन इन करें",
                emailAddress: "ईमेल पता",
                password: "पासवर्ड",
                iWantTo: "मैं चाहता/चाहती हूँ",
                rememberMe: "मुझे याद रखें",
                forgotPassword: "पासवर्ड भूल गए?",
                signIn: "साइन इन करें",
                signUp: "साइन अप करें" ,
                registerAsFarmer: "हमारे साथ जुड़ें और अपनी फसलों के लिए एक स्थिर बाजार सुनिश्चित करें!",
                registerAsBuyer: "किसानों से जुड़ें,\n थोक में ताजा उपज प्राप्त करें!",
                iWantTo: "मैं चाहता हूँ",
                buyProduce: "उपज खरीदना",
                sellProduce: "उपज बेचना",
                supportingindian:"भारतीय किसानों का समर्थन पारदर्शी और सुरक्षित अनुबंध खेती के माध्यम से",
                Empowering:"किसानों को सशक्त बनाना, खरीदारों से जोड़ना",
                GetStarted:"शुरू करें",
                BuyProduce:"उत्पाद खरीदें",
                SellProduce:"उत्पाद बेचें",
                Email:"ईमेल",
                newtoKC:"किसान कनेक्ट में नए हैं",
                SignBuyProduce:"उत्पाद खरीदने के लिए साइन अप करें",
                FName:"पहला नाम",
                LName:"अंतिम नाम",
                Pno:"फोन नंबर",
                CPassword:"पासवर्ड की पुष्टि करें",
                State:"राज्य" ,
                City:"शहर",
                B_O:"व्यवसाय/संगठन का नाम",
                BAddress:"व्यवसाय का पता",
                iagree:"मैं शर्तों और नियमों से सहमत हूँ",
                Register:"पंजीकरण करें"

                
            }
        },
        ml: {
            translation: {
                marketplace: "ചന്തസ്ഥലം",
                categories: "വിഭാഗങ്ങൾ",
                myListing: "എന്റെ ലിസ്റ്റിംഗുകൾ",
                signInToYourAccount: "നിങ്ങളുടെ അക്കൗണ്ടിലേക്ക് സൈൻ ഇൻ ചെയ്യുക",
                emailAddress: "ഇമെയിൽ വിലാസം",
                password: "പാസ്വേഡ്",
                rememberMe: "എന്നെ ഓർക്കുക",
                forgotPassword: "പാസ്വേഡ് മറന്നോ?",
                signIn: "സൈൻ ഇൻ ചെയ്യുക",
                signUp: "സൈൻ അപ്പ് ചെയ്യുക" ,
                registerAsFarmer: "ഞങ്ങളോടൊപ്പം ചേരുക, നിങ്ങളുടെ വിളകൾക്ക് സ്ഥിരമായ വിപണി ഉറപ്പാക്കുക!",
                registerAsBuyer: "കർഷകരുമായി ബന്ധപ്പെടുക, ന്നപിരിവിൽ പുതിയ വിളകൾ ഉറപ്പാക്കുക!",
                iWantTo: "എനിക്ക്",
                buyProduce: "ഉൽപ്പന്നം വാങ്ങണം",
                sellProduce: "ഉൽപ്പന്നം വിൽക്കണം"
            }
        }
    }
});

export default i18n;