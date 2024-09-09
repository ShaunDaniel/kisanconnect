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
                Register:"Register",

                LandArea:"Land Area",
                TypeofFarming:"Type of Farming",
                Organic:"Organic",
                Traditional:"Traditional",
                Mixed:"Mixed",
                Others:"others",
                TransportationFacilities:"Transportation Facilities",
                delivery:"Do you have your own vehicle for delivery?",
                Certification:"Certification",
                Note:"Note: You will need to verify your certifications later.",
                Ihavecertifications:" I have certifications",
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
                SellProduce: "उपज बेचना",
                supportingindian:"भारतीय किसानों का समर्थन पारदर्शी और सुरक्षित अनुबंध खेती के माध्यम से",
                Empowering:"किसानों को सशक्त बनाना, खरीदारों से जोड़ना",
                GetStarted:"शुरू करें",
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
                Register:"पंजीकरण करें",
                LandArea:"भूमि क्षेत्र",
                TypeofFarming:"किसानी के प्रकार",
                Organic:"जैविक",
                Traditional:"पारंपरिक",
                Mixed:"मिश्रित",
                Others:"अन्य",
                TransportationFacilities:"परिवहन सुविधाएँ",
                delivery:"क्या आपके पास डिलीवरी के लिए अपना वाहन है?",
                Certification:"प्रमाणन",
                Note:"नोट: आपको बाद में अपने प्रमाणनों की पुष्टि करनी होगी।",
                Ihavecertifications:"मेरे पास प्रमाणपत्र हैं"

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
                sellProduce: "ഉൽപ്പന്നം വിൽക്കണം",
                TypeofFarming:"",
                Traditional:"",
                Others:"",
                TransportationFacilities:"",
                delivery:"",
                Certification:"",
                Note:"",
                Ihavecertifications:""
            }
        },
        bn: {
            translation: {
                // Add Bengali translations here
            }
        },
        te: {
            translation: {
                // Add Telugu translations here
            }
        },
        ta: {
            translation: {
                // Add Tamil translations here
            }
        },
        kn: {
            translation: {
                // Add Kannada translations here
            }
        },
        gu: {
            translation: {
                // Add Gujarati translations here
            }
        }
    }
});

export default i18n;