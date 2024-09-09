import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {

                FName: "First Name",
                LName: "Last Name",
                Pno: "Phone Number",
                emailAddress: "Email address",
                Email: "Email Address",
                password: "Password",
                CPassword: "Confirm Password",
                forgotPassword: "Forgot password?",
                State: "State",
                City: "City",

                marketplace: "Marketplace",
                categories: "Categories",
                myListing: "My Listings",
                signInToYourAccount: "Sign in to your account",

                signIn: "Sign in",
                signUp: "Sign up",
                iWantTo: "I want to",
                Register: "Register",

                registerAsFarmer: "Join us and secure a stable market for your crops!",
                registerAsBuyer: "Connect with Farmers,\n Source Fresh Produce in Bulk!",

                buyProduce: "Buy Produce",
                sellProduce: "Sell Produce",
                BuyProduce: "Buy Produce",
                SellProduce: "Sell Produce",
                SignBuyProduce: "Sign Up to Buy Produce",

                supportingindian: "Supporting Indian Farmers through Transparent and Secure Contract Farming",
                Empowering: "Empowering Farmers, Connecting Buyers",
                GetStarted: "Get Started",

                B_O: "Business/Organization Name",
                BAddress: "Business Address",
                iagree: "I agree to the terms and conditions",

                LandArea: "Land Area",
                TypeofFarming: "Type of Farming",
                Organic: "Organic",
                Traditional: "Traditional",
                Mixed: "Mixed",
                Others: "others",

                TransportationFacilities: "Transportation Facilities",
                delivery: "Do you have your own vehicle for delivery?",
                Certification: "Certification",
                Ihavecertifications: " I have certifications",
                Note: "Note: You will need to verify your certifications later.",
                BecomeFarmer: "Become a Farmer Partner",

                rememberMe: "Remember Me ",
                newtoKC: "New To KisanConnect"
            }
        },
        hi: {
            translation: {
                FName: "पहला नाम",
                LName: "अंतिम नाम",
                Pno: "फोन नंबर",
                emailAddress: "ईमेल पता",
                Email: "ईमेल",
                password: "पासवर्ड",
                CPassword: "पासवर्ड की पुष्टि करें",
                forgotPassword: "पासवर्ड भूल गए?",
                State: "राज्य",
                City: "शहर",

                marketplace: "बाज़ार",
                categories: "श्रेणियाँ",
                myListing: "मेरी सूचियाँ",
                signInToYourAccount: "अपने खाते में साइन इन करें",

                signIn: "साइन इन करें",
                signUp: "साइन अप करें",
                iWantTo: "मैं चाहता/चाहती हूँ",
                iWantTo: "मैं चाहता हूँ",
                Register: "पंजीकरण करें",

                registerAsFarmer: "हमारे साथ जुड़ें और अपनी फसलों के लिए एक स्थिर बाजार सुनिश्चित करें!",
                registerAsBuyer: "किसानों से जुड़ें,\n थोक में ताजा उपज प्राप्त करें!",

                buyProduce: "उपज खरीदना",
                SellProduce: "उपज बेचना",
                SignBuyProduce: "उत्पाद खरीदने के लिए साइन अप करें",

                supportingindian: "भारतीय किसानों का समर्थन पारदर्शी और सुरक्षित अनुबंध खेती के माध्यम से",
                Empowering: "किसानों को सशक्त बनाना, खरीदारों से जोड़ना",
                GetStarted: "शुरू करें",

                B_O: "व्यवसाय/संगठन का नाम",
                BAddress: "व्यवसाय का पता",
                iagree: "मैं शर्तों और नियमों से सहमत हूँ",

                LandArea: "भूमि क्षेत्र",
                TypeofFarming: "किसानी के प्रकार",
                Organic: "जैविक",
                Traditional: "पारंपरिक",
                Mixed: "मिश्रित",
                Others: "अन्य",

                TransportationFacilities: "परिवहन सुविधाएँ",
                delivery: "क्या आपके पास डिलीवरी के लिए अपना वाहन है?",
                Certification: "प्रमाणन",
                Ihavecertifications: "मेरे पास प्रमाणपत्र हैं",
                Note: "नोट: आपको बाद में अपने प्रमाणनों की पुष्टि करनी होगी।",
                BecomeFarmer: "किसान साझेदार बनें",

                rememberMe: "मुझे याद रखें",
                newtoKC: "किसान कनेक्ट में नए हैं"
            }
        },
        ml: {
            translation: {
                FName: "പേരിന്റെ ആദ്യഭാഗം",
                LName: "പേരിന്റെ അവസാനഭാഗം",
                Pno: "ഫോൺ നമ്പർ",
                emailAddress: "ഇമെയിൽ വിലാസം",
                Email: "ഇമെയിൽ",
                password: "പാസ്‌വേഡ്",
                CPassword: "പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക",
                forgotPassword: "പാസ്‌വേഡ് മറന്നോ?",
                State: "സംസ്ഥാനം",
                City: "നഗരം",
                marketplace: "ബസാർ",

                categories: "വിഭാഗങ്ങൾ",
                myListing: "എന്റെ ലിസ്റ്റിംഗുകൾ",
                signInToYourAccount: "നിങ്ങളുടെ അക്കൗണ്ടിലേക്ക് സൈൻ ഇൻ ചെയ്യുക",

                signIn: "സൈൻ ഇൻ ചെയ്യുക",
                signUp: "സൈൻ അപ് ചെയ്യുക",
                iWantTo: "ഞാൻ ആഗ്രഹിക്കുന്നു",
                Register: "രജിസ്റ്റർ ചെയ്യുക",

                registerAsFarmer: "ഞങ്ങളോടൊപ്പം ചേരൂ, നിങ്ങളുടെ വിളകൾക്കായി സ്ഥിരമായ വിപണി ഉറപ്പാക്കൂ!",
                registerAsBuyer: "കർഷകരുമായി ബന്ധപ്പെടുക, സ്റ്റോക്കിൽ പുതുതായി വിളവെടുത്ത ഉൽപ്പന്നങ്ങൾ നേടുക!",

                buyProduce: "ഉൽപ്പന്നങ്ങൾ വാങ്ങുക",
                SellProduce: "ഉൽപ്പന്നങ്ങൾ വിൽക്കുക",
                SignBuyProduce: "ഉൽപ്പന്നങ്ങൾ വാങ്ങാൻ സൈൻ ഇൻ ചെയ്യുക",

                supportingindian: "പരസ്പരതത്തിലും സുരക്ഷിതത്വത്തിലും ഉറച്ച കരാർ കൃഷിയുടെ വഴി ഇന്ത്യൻ കർഷകരെ പിന്തുണയ്ക്കുന്നു",
                Empowering: "കർഷകരെ സവിശേഷമാക്കുക, വാങ്ങുന്നവരുമായി ബന്ധിപ്പിക്കുക",
                GetStarted: "ആരംഭിക്കുക",

                B_O: "ബിസിനസ്/സംഘടനയുടെ പേര്",
                BAddress: "ബിസിനസിന്റെ വിലാസം",
                iagree: "ഞാൻ നിബന്ധനകളും വ്യവസ്ഥകളും അംഗീകരിക്കുന്നു",

                LandArea: "ഭൂമിശാസ്ത്രമേഖല",
                TypeofFarming: "കൃഷിയുടെ തരം",
                Organic: "ഓർഗാനിക്",
                Traditional: "പാരമ്പര്യ",
                Mixed: "മിശ്രം",
                Others: "മറ്റുള്ളവ",

                TransportationFacilities: "ഗതാഗത സൗകര്യങ്ങൾ",
                delivery: "നിങ്ങൾക്ക് ഡെലിവറിക്കായി സ്വന്തമായി വാഹനം ഉണ്ടോ?",
                Certification: "സർട്ടിഫിക്കേഷൻ",
                Ihavecertifications: "എനിക്ക് സർട്ടിഫിക്കേഷനുകൾ ഉണ്ട്",
                Note: "കുറിപ്പ്: നിങ്ങളുടെ സർട്ടിഫിക്കേഷനുകൾ പിന്നീട് സ്ഥിരീകരിക്കേണ്ടതുണ്ട്.",
                BecomeFarmer: "കർഷക പങ്കാളിയാകുക",

                rememberMe: "എനിക്ക് ഓർക്കൂ",
                newtoKC: "കിസാൻ കണക്റ്റിൽ പുതിയ ആളാണോ?"
            }
        },
        bn: {
            translation: {
                // Add Bengali translations here
                FName: "প্রথম নাম",

                LName: "শেষ নাম",

                Pno: "ফোন নম্বর",

                emailAddress: "ইমেইল ঠিকানা",

                Email: "ইমেইল ঠিকানা",

                password: "পাসওয়ার্ড",

                CPassword: "পাসওয়ার্ড নিশ্চিত করুন",

                forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",

                State: "রাজ্য",

                City: "শহর",

                marketplace: "বাজার",

                categories: "শ্রেণী",

                myListing: "আমার তালিকা",

                signInToYourAccount: "আপনার অ্যাকাউন্টে সাইন ইন করুন",

                signIn: "সাইন ইন করুন",

                signUp: "সাইন আপ করুন",

                iWantTo: "আমি চাই",

                Register: "রেজিস্টার করুন",

                registerAsFarmer: "আমাদের সাথে যোগ দিন এবং আপনার ফসলের জন্য একটি স্থিতিশীল বাজার নিশ্চিত করুন",

                registerAsBuyer: "কৃষকদের সাথে সংযুক্ত হন,\n বড় পরিমাণে তাজা উৎপাদন সংগ্রহ করুন",

                buyProduce: "উৎপাদন কিনুন",

                sellProduce: "উৎপাদন বিক্রি করুন",

                BuyProduce: "উৎপাদন কিনুন",

                SellProduce: "উৎপাদন বিক্রি করুন",

                SignBuyProduce: "উৎপাদন কেনার জন্য সাইন আপ করুন",

                supportingindian: "স্বচ্ছ এবং নিরাপদ চুক্তি কৃষির মাধ্যমে ভারতীয় কৃষকদের সমর্থন",

                Empowering: "কৃষকদের ক্ষমতায়ন, ক্রেতাদের সাথে সংযোগ স্থাপন",

                GetStarted: "শুরু করুন",

                B_O: "ব্যবসা/সংগঠনের নাম",

                BAddress: "ব্যবসার ঠিকানা",

                iagree: "আমি শর্তাবলী এবং নীতিমালার সাথে সম্মত",

                LandArea: "ভূমির এলাকা",

                TypeofFarming: "কৃষির প্রকার",

                Organic: "জৈবিক",

                Traditional: "পারাম্পরিক",

                Mixed: "মিশ্র",

                Others: "অন্যান্য",

                TransportationFacilities: "পরিবহন সুবিধা",

                delivery: "আপনার কি ডেলিভারির জন্য নিজের যানবাহন আছে?",

                Certification: "সার্টিফিকেশন",

                Ihavecertifications: "আমার কাছে সার্টিফিকেশন আছে",

                Note: "নোট: আপনাকে পরে আপনার সার্টিফিকেশন যাচাই করতে হবে",

                BecomeFarmer: "কৃষক অংশীদার হয়ে যান",

                rememberMe: "আমায় মনে রাখুন",

                newtoKC: "KisanConnect এ নতুন"


            }
        },
        te: {
            translation: {
                // Add Telugu translations here
                FName: "మొదటి పేరు",

                LName: "చివరి పేరు",

                Pno: "ఫోన్ నంబర్",

                emailAddress: "ఇమెయిల్ చిరునామా",

                Email: "ఇమెయిల్ చిరునామా",

                password: "పాస్‌వర్డ్",

                CPassword: "పాస్‌వర్డ్ నిర్ధారించండి",

                forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా?",

                State: "రాష్ట్రం",

                City: "నగరం",

                marketplace: "మార్కెట్",

                categories: "వర్గాలు",

                myListing: "నా జాబితా",

                signInToYourAccount: "మీ ఖాతాలో సైన్ ఇన్ అవ్వండి",

                signIn: "సైన్ ఇన్ చేయండి",

                signUp: "సైన్ అప్ చేయండి",

                iWantTo: "నేను కోరుకుంటున్నాను",

                Register: "నమోదు చేయండి",

                registerAsFarmer: "మనతో చేరండి మరియు మీ పంటలకు స్థిరమైన మార్కెట్‌ను భద్రపరచండి",

                registerAsBuyer: "వ్యాపారులతో అనుసంధానమయ్యి, పెద్ద మొత్తంలో తాజా ఉత్పత్తి పొందండి",

                buyProduce: "ఉత్పత్తిని కొనండి",

                sellProduce: "ఉత్పత్తిని అమ్మండి",

                BuyProduce: "ఉత్పత్తిని కొనండి",

                SellProduce: "ఉత్పత్తిని అమ్మండి",

                SignBuyProduce: "ఉత్పత్తిని కొనుగోలు చేసేందుకు సైన్ అప్ చేయండి",

                supportingindian: "పారదర్శకమైన మరియు భద్రతతో కూడిన ఒప్పంద రైతు వ్యవసాయంతో భారతీయ రైతులను మద్దతు ఇవ్వడం",

                Empowering: "రైతులను శక్తివంతం చేయడం, కొనుగోలుదారులతో కనెక్ట్ అవడం",

                GetStarted: "ప్రారంభించండి",

                B_O: "వ్యాపారం/సంస్థ పేరు",

                BAddress: "వ్యాపార చిరునామా",

                iagree: "నేను నిబంధనలు మరియు విధానాలను అంగీకరిస్తున్నాను",

                LandArea: "భూభాగం",

                TypeofFarming: "వ్యవసాయ రకం",

                Organic: "ఆర్గానిక్",

                Traditional: "పారంపరిక",

                Mixed: "మిశ్రమ",

                Others: "ఇతర",

                TransportationFacilities: "రవాణా సౌకర్యాలు",

                delivery: "మీకు డెలివరీ కోసం స్వంత వాహనం ఉందా?",

                Certification: "సర్టిఫికేషన్",

                Ihavecertifications: "నా వద్ద సర్టిఫికేషన్లు ఉన్నాయి",

                Note: "గమనిక: మీ సర్టిఫికేషన్లను మీరు తరువాత నిర్ధారించాల్సి ఉంటుంది",

                BecomeFarmer: "రైతు భాగస్వామిగా మారండి",

                rememberMe: "నన్ను గుర్తుంచుకోండి",

                newtoKC: "కిసాన్ కనెక్ట్‌లో కొత్త"
            }
        },
        ta: {
            translation: {
                // Add Tamil translations here
                FName: "முதல் பெயர்",

                LName: "கடைசி பெயர்",

                Pno: "தொலைபேசி எண்",

                emailAddress: "மெயில் முகவரி",

                Email: "மெயில் முகவரி",

                password: "கடவுச்சொல்",

                CPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",

                forgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",

                State: "மாநிலம்",

                City: "நகரம்",

                marketplace: "சந்தை",

                categories: "வகைகள்",

                myListing: "என் பட்டியல்",

                signInToYourAccount: "உங்கள் கணக்கில் உள்நுழையவும்",

                signIn: "உள்நுழையவும்",

                signUp: "பதிவு செய்யவும்",

                iWantTo: "நான் விரும்புகிறேன்",

                Register: "பதிவு செய்யவும்",

                registerAsFarmer: "எங்களைச் சேர்ந்தும் உங்கள் பயிர்களுக்கு நிலையான சந்தையை உறுதிசெய்யவும்",

                registerAsBuyer: "விவசாயிகளுடன் இணைந்து, பெரிய அளவிலான புதிய உற்பத்தியைப் பெறவும்",

                buyProduce: "உற்பத்தி வாங்கவும்",

                sellProduce: "உற்பத்தியை விற்பனை செய்யவும்",

                BuyProduce: "உற்பத்தி வாங்கவும்",

                SellProduce: "உற்பத்தியை விற்பனை செய்யவும்",

                SignBuyProduce: "உற்பத்தி வாங்குவதற்காக பதிவு செய்யவும்",

                supportingindian: "விரக்தியான மற்றும் பாதுகாப்பான ஒப்பந்த வேளாண்மையினால் இந்திய விவசாயிகளை ஆதரிக்கிறது",

                Empowering: "விவசாயிகளை சக்தியூட்டல், வாங்குநர்களை இணைக்கும்",

                GetStarted: "தொடங்குங்கள்",

                B_O: "வணிகம்/அமைப்பின் பெயர்",

                BAddress: "வணிக முகவரி",

                iagree: "நான் விதிமுறைகள் மற்றும் நிபந்தனைகளுடன் ஒப்புக்கொள்கிறேன்",

                LandArea: "நிலப் பரப்பு",

                TypeofFarming: "விவசாய வகை",

                Organic: "ஜैவீக",

                Traditional: "பாரம்பரிய",

                Mixed: "கலவை",

                Others: "மற்றவை",

                TransportationFacilities: "போக்குவரத்து வசதிகள்",

                delivery: "உங்கள் வைத்திருக்கும் முறைமையை கொண்டு நீங்கள் கிடைத்துக்கொள்ளுகிறீர்களா?",

                Certification: "சான்றிதழ்",

                Ihavecertifications: "எனக்கு சான்றிதழ்கள் உள்ளன",

                Note: "குறிப்பு: பிறகு உங்கள் சான்றிதழ்களை நீங்கள் உறுதிப்படுத்த வேண்டும்",

                BecomeFarmer: "விவசாயி பங்குதாரராக ஆகுங்கள்",

                rememberMe: "என்னை நினைவில் கொள்ளவும்",

                newtoKC: "KisanConnect இல் புதியவர்"
            }
        },
        kn: {
            translation: {
                // Add Kannada translations here
                FName: "ಮೂಲ ಹೆಸರು",

                LName: "ಕೊನೆಯ ಹೆಸರು",

                Pno: "ದೂರವಾಣಿ ನಂಬರ್",

                emailAddress: "ಇಮೇಲ್ ವಿಳಾಸ",

                Email: "ಇಮೇಲ್ ವಿಳಾಸ",

                password: "ಪಾಸ್ವರ್ಡ್",

                CPassword: "ಪಾಸ್ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",

                forgotPassword: "ಪಾಸ್ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?",

                State: "ರಾಜ್ಯ",

                City: "ನಗರ",

                marketplace: "ಮಾರ್ಕೆಟ್",

                categories: "ವರ್ಗಗಳು",

                myListing: "ನನ್ನ ಪಟ್ಟಿಕೆ",

                signInToYourAccount: "ನಿಮ್ಮ ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",

                signIn: "ಸೈನ್ ಇನ್ ಮಾಡಿ",

                signUp: "ಸೈನ್ ಅಪ್ ಮಾಡಿ",

                iWantTo: "ನಾನು ಮಾಡಲು ಇಚ್ಛಿಸುತ್ತೇನೆ",

                Register: "ನೋಂದಣಿ ಮಾಡಿ",

                registerAsFarmer: "ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ ಸ್ಥಿರವಾದ ಮಾರುಕಟ್ಟೆ ಒದಗಿಸಿ",

                registerAsBuyer: "ಕೆಲಸಗಾರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿ,\n ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ تازಾ ಉತ್ಪನ್ನವನ್ನು ಪಡೆದುಕೊಳ್ಳಿ",

                buyProduce: "ಉತ್ಪನ್ನ ಖರೀದಿ ಮಾಡಿ",

                sellProduce: "ಉತ್ಪನ್ನ ಮಾರಾಟ ಮಾಡಿ",

                BuyProduce: "ಉತ್ಪನ್ನ ಖರೀದಿ ಮಾಡಿ",

                SellProduce: "ಉತ್ಪನ್ನ ಮಾರಾಟ ಮಾಡಿ",

                SignBuyProduce: "ಉತ್ಪನ್ನ ಖರೀದಿಸಲು ಸೈನ್ ಅಪ್ ಮಾಡಿ",

                supportingindian: "ಪಾರದರ್ಶಕ ಮತ್ತು ಸುರಕ್ಷಿತ ಒಪ್ಪಂದ ಕೃಷಿಯ ಮೂಲಕ ಭಾರತೀಯ ರೈತರಿಗೆ ಬೆಂಬಲ ನೀಡುತ್ತಿದೆ",

                Empowering: "ರೈತರಿಗೆ ಶಕ್ತಿಯ ತುಂಬುವುದು, ಖರೀದಿದಾರರನ್ನು ಸಂಪರ್ಕಿಸುವುದು",

                GetStarted: "ಪ್ರಾರಂಭಿಸಿ",

                B_O: "ವ್ಯಾಪಾರ/ಸಂಸ್ಥೆಯ ಹೆಸರು",

                BAddress: "ವ್ಯಾಪಾರ ವಿಳಾಸ",

                iagree: "ನಾನು ನಿಯಮಗಳು ಮತ್ತು ಶ್ರೇಣಿಗಳನ್ನು ಒಪ್ಪಿಸುತ್ತೇನೆ",

                LandArea: "ಭೂಮಿಯ ವಿಸ್ತಾರ",

                TypeofFarming: "ಕೃಷಿಯ ಪ್ರಕಾರ",

                Organic: "ಜೈವಿಕ",

                Traditional: "ಪಾರಂಪರಿಕ",

                Mixed: "ಮಿಶ್ರ",

                Others: "ಇತರ",

                TransportationFacilities: "ಪೋಕರವಹನ ಸೌಕರ್ಯಗಳು",

                delivery: "ನಿಮ್ಮಗೆ ಡೆಲಿವರಿಗಾಗಿ ಸ್ವಂತ ವಾಹನ ಇದೆಯೆ?",

                Certification: "ಪ್ರಮಾಣಪತ್ರ",

                Ihavecertifications: "ನಾನು ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಹೊಂದಿದ್ದೇನೆ",

                Note: "ಗಮನಿಸಿ: ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ನಂತರ ಖಚಿತಪಡಿಸಬೇಕು",

                BecomeFarmer: "ಕೃಷಕ ಪಾಲುದಾರರಾಗಿರಿ",

                rememberMe: "ನಾನು ನೆನಪಿಸಿಕೊಳ್ಳಿ",

                newtoKC: "ಕಿಸಾನ್ ಕನೆಕ್ಟ್‌ನಲ್ಲಿ ಹೊಸದಾಗಿ"
            }
        },
        gu: {
            translation: {
                // Add Gujarati translations here
                FName: "મૂળ નામ",

                LName: "અંતિમ નામ",

                Pno: "ફોન નંબર",

                emailAddress: "ઇમેઇલ એડ્રેસ",

                Email: "ઇમેઇલ એડ્રેસ",

                password: "પાસવર્ડ",

                CPassword: "પાસવર્ડ પુષ્ટિ",

                forgotPassword: "પાસવર્ડ ભૂલી ગયા છો?",

                State: "રાજ્ય",

                City: "શહેર",

                marketplace: "માર્કેટ",

                categories: "શ્રેણીઓ",

                myListing: "મારી યાદી",

                signInToYourAccount: "તમારા ખાતામાં સાઇન ઇન કરો",

                signIn: "સાઇન ઇન કરો",

                signUp: "સાઇન અપ કરો",

                iWantTo: "હું કરવા ઈચ્છું છું",

                Register: "રજીસ્ટર કરો",

                registerAsFarmer: "અમારા સાથે જોડાઓ અને તમારા પાક માટે સ્થિર માર્કેટ પૂરો પાડો",

                registerAsBuyer: "કૃષકોથી સંપર્કમાં રહો,\n મોટા પાયે તાજા ઉત્પાદનો મેળવો",

                buyProduce: "ઉત્પાદન ખરીદો",

                sellProduce: "ઉત્પાદન વેચો",

                BuyProduce: "ઉત્પાદન ખરીદો",

                SellProduce: "ઉત્પાદન વેચો",

                SignBuyProduce: "ઉત્પાદન ખરીદવા માટે સાઇન અપ કરો",

                supportingindian: "સ્પષ્ટ અને સુરક્ષિત કરાર કૃષિ દ્વારા ભારતીય ખેડૂતોને સમર્થન આપી રહ્યું છે",

                Empowering: "કૃષકોને સશક્ત બનાવવું, ખરીદદારોને જોડવું",

                GetStarted: "શરૂ કરવું",

                B_O: "વ્યાપાર/સંસ્થાનું નામ",

                BAddress: "વ્યાપારનો સરનામું",

                iagree: "હું નિયમો અને શરતો સાથે સહમત છું",

                LandArea: "જમીનની વ્યાપાર",

                TypeofFarming: "કૃષિનો પ્રકાર",

                Organic: "જૈવિક",

                Traditional: "પરંપરાગત",

                Mixed: "મિશ્ર",

                Others: "અન્ય",

                TransportationFacilities: "પરિવહન સુવિધાઓ",

                delivery: "તમે ડિલિવરી માટે પોતાની વાહન ધરાવ છો?",

                Certification: "પ્રમાણપત્ર",

                Ihavecertifications: "મારી પાસે પ્રમાણપત્રો છે",

                Note: "મહત્વપૂર્ણ નોંધ: તમારા પ્રમાણપત્રોને પછી સત્યાપિત કરવામાં આવશે",

                BecomeFarmer: "કૃષક ભાગીદાર બનવું",

                rememberMe: "મને યાદ રાખો",

                newtoKC: "કિસાન કનેક્ટમાં નવા"
            }
        },
        mr: {
            translation:{
                FName: "मुख्य नाव",

                LName: "आखरी नाव",

                Pno: "फोन नंबर",

                emailAddress: "ईमेल पत्ता",

                Email: "ईमेल पत्ता",

                password: "पासवर्ड",

                CPassword: "पासवर्ड पुष्टी",

                forgotPassword: "पासवर्ड विसरला का?",

                State: "राज्य",

                City: "शहर",

                marketplace: "बाजार",

                categories: "वर्ग",

                myListing: "माझी यादी",

                signInToYourAccount: "तुमच्या खात्यात साइन इन करा",

                signIn: "साइन इन करा",

                signUp: "साइन अप करा",

                iWantTo: "माझ्या करण्याची इच्छा आहे",

                Register: "नोंदणी करा",

                registerAsFarmer: "आमच्याशी जुळा आणि तुमच्या पिकांसाठी स्थिर बाजारपेठ उपलब्ध करा",

                registerAsBuyer: "कृषकांशी संपर्क साधा,\n मोठ्या प्रमाणात ताजे उत्पादन मिळवा",

                buyProduce: "उत्पादन खरेदी करा",

                sellProduce: "उत्पादन विक्री करा",

                BuyProduce: "उत्पादन खरेदी करा",

                SellProduce: "उत्पादन विक्री करा",

                SignBuyProduce: "उत्पादन खरेदीसाठी साइन अप करा",

                supportingindian: "स्पष्ट आणि सुरक्षित करार कृषी द्वारे भारतीय शेतकऱ्यांना समर्थन देत आहे",

                Empowering: "शेतकऱ्यांना सशक्त बनवणे, खरेदीदारांशी संपर्क साधणे",

                GetStarted: "सुरू करा",

                B_O: "व्यापार/संस्थेचे नाव",

                BAddress: "व्यापाराचे पत्ता",

                iagree: "मी नियम आणि अटी मान्य करतो/करते",

                LandArea: "जमीन क्षेत्र",

                TypeofFarming: "कृषीचा प्रकार",

                Organic: "जैविक",

                Traditional: "परंपरागत",

                Mixed: "मिश्रित",

                Others: "इतर",

                TransportationFacilities: "परिवहन सुविधा",

                delivery: "तुमच्याकडे वितरणासाठी स्वत:चे वाहन आहे का?",

                Certification: "प्रमाणपत्र",

                Ihavecertifications: "माझ्याकडे प्रमाणपत्रे आहेत",

                Note: "सूचना: तुमची प्रमाणपत्रे नंतर सत्यापित केली जाईल",

                BecomeFarmer: "शेतकरी भागीदार बना",

                rememberMe: "मला लक्षात ठेवा",

                newtoKC: "किसान कनेक्टमध्ये नवीन"
            }
        },
        pa:{
            translation:{
                FName: "ਮੂਲ ਨਾਮ",

                LName: "ਆਖਰੀ ਨਾਮ",

                Pno: "ਫੋਨ ਨੰਬਰ",

                emailAddress: "ਈਮੇਲ ਪਤਾ",

                Email: "ਈਮੇਲ ਪਤਾ",

                password: "ਪਾਸਵਰਡ",

                CPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ",

                forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ ਹੋ?",

                State: "ਰਾਜ",

                City: "ਸ਼ਹਿਰ",

                marketplace: "ਬਜ਼ਾਰ",

                categories: "ਸ਼੍ਰੇਣੀਆਂ",

                myListing: "ਮੇਰੀ ਸੂਚੀ",

                signInToYourAccount: "ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ",

                signIn: "ਸਾਈਨ ਇਨ ਕਰੋ",

                signUp: "ਸਾਈਨ ਅਪ ਕਰੋ",

                iWantTo: "ਮੈਂ ਕਰਨਾ ਚਾਹੁੰਦਾ/ਚਾਹੁੰਦੀ ਹਾਂ",

                Register: "ਰਜਿਸਟਰ ਕਰੋ",

                registerAsFarmer: "ਸਾਡੇ ਨਾਲ ਜੁੜੋ ਅਤੇ ਆਪਣੇ ਪੈਦਾਵਾਰ ਲਈ ਸਥਿਰ ਬਜ਼ਾਰ ਪ੍ਰਦਾਨ ਕਰੋ",

                registerAsBuyer: "ਕਿਸਾਨਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ,\n ਵੱਡੇ ਪੱਧਰ ਤੇ ਤਾਜ਼ਾ ਉਤਪਾਦ ਪ੍ਰਾਪਤ ਕਰੋ",

                buyProduce: "ਉਤਪਾਦ ਖਰੀਦੋ",

                sellProduce: "ਉਤਪਾਦ ਵੇਚੋ",

                BuyProduce: "ਉਤਪਾਦ ਖਰੀਦੋ",

                SellProduce: "ਉਤਪਾਦ ਵੇਚੋ",

                SignBuyProduce: "ਉਤਪਾਦ ਖਰੀਦਣ ਲਈ ਸਾਈਨ ਅਪ ਕਰੋ",

                supportingindian: "ਪਾਰਦਰਸ਼ੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਨਟ੍ਰੈਕਟ ਫਾਰਮਿੰਗ ਦੁਆਰਾ ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਦਾ ਸਹਿਯੋਗ ਕਰ ਰਿਹਾ ਹੈ",

                Empowering: "ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ, ਖਰੀਦਦਾਰਾਂ ਨਾਲ ਜੁੜਨਾ",

                GetStarted: "ਸ਼ੁਰੂ ਕਰੋ",

                B_O: "ਵਪਾਰ/ਸੰਸਥਾ ਦਾ ਨਾਮ",

                BAddress: "ਵਪਾਰ ਦਾ ਪਤਾ",

                iagree: "ਮੈਂ ਸ਼ਰਤਾਂ ਅਤੇ ਨਿਯਮਾਂ ਨਾਲ ਸਹਿਮਤ ਹਾਂ",

                LandArea: "ਜ਼ਮੀਨ ਦਾ ਖੇਤਰਫਲ",

                TypeofFarming: "ਫ਼ਾਰਮਿੰਗ ਦੀ ਕਿਸਮ",

                Organic: "ਜੈਵਿਕ",

                Traditional: "ਪਰੰਪਰਿਕ",

                Mixed: "ਮਿਸ਼ਰਤ",

                Others: "ਹੋਰ",

                TransportationFacilities: "ਆਵਾਜਾਈ ਦੀਆਂ ਸੁਵਿਧਾਵਾਂ",

                delivery: "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਡਿਲਿਵਰੀ ਲਈ ਆਪਣੀ ਗੱਡੀ ਹੈ?",

                Certification: "ਪ੍ਰਮਾਣਪੱਤਰ",

                Ihavecertifications: "ਮੇਰੇ ਕੋਲ ਪ੍ਰਮਾਣਪੱਤਰ ਹਨ",

                Note: "ਨੋਟ: ਤੁਹਾਡੇ ਪ੍ਰਮਾਣਪੱਤਰ ਬਾਅਦ ਵਿੱਚ ਤਸਦੀਕ ਕੀਤੇ ਜਾਣਗੇ",

                BecomeFarmer: "ਕਿਸਾਨ ਭਾਗੀਦਾਰ ਬਣੋ",

                rememberMe: "ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ",

                newtoKC: "ਕਿਸਾਨ ਕਨੈਕਟ ਵਿੱਚ ਨਵਾਂ"

            }
        },
        ur:{
            translation:{
                FName: "پہلا نام",

                LName: "آخری نام",

                Pno: "فون نمبر",

                emailAddress: "ای میل پتہ",

                Email: "ای میل پتہ",

                password: "پاس ورڈ",

                CPassword: "پاس ورڈ کی تصدیق کریں",

                forgotPassword: "پاس ورڈ بھول گئے ہیں؟",

                State: "صوبہ",

                City: "شہر",

                marketplace: "بازار",

                categories: "زمرے",

                myListing: "میری فہرست",

                signInToYourAccount: "اپنے اکاؤنٹ میں سائن ان کریں",

                signIn: "سائن ان کریں",

                signUp: "سائن اپ کریں",

                iWantTo: "میں کرنا چاہتا/چاہتی ہوں",

                Register: "رجسٹر کریں",

                registerAsFarmer: "ہمارے ساتھ شامل ہوں اور اپنی فصلوں کے لیے مستحکم مارکیٹ فراہم کریں",

                registerAsBuyer: "کسانوں سے رابطہ کریں،\n بڑے پیمانے پر تازہ مصنوعات حاصل کریں",

                buyProduce: "پیداوار خریدیں",

                sellProduce: "پیداوار بیچیں",

                BuyProduce: "پیداوار خریدیں",

                SellProduce: "پیداوار بیچیں",

                SignBuyProduce: "پیداوار خریدنے کے لیے سائن اپ کریں",

                supportingindian: "واضح اور محفوظ معاہدہ زراعت کے ذریعے بھارتی کسانوں کی حمایت کر رہا ہے",

                Empowering: "کسانوں کو بااختیار بنانا، خریداروں سے جڑنا",

                GetStarted: "شروع کریں",

                B_O: "کاروبار/ادارے کا نام",

                BAddress: "کاروبار کا پتہ",

                iagree: "میں شرائط و ضوابط سے اتفاق کرتا/کرتی ہوں",

                LandArea: "زمین کا رقبہ",

                TypeofFarming: "زرعی قسم",

                Organic: "نامیاتی",

                Traditional: "روایتی",

                Mixed: "مخلوط",

                Others: "دیگر",

                TransportationFacilities: "ٹرانسپورٹ کی سہولتیں",

                delivery: "کیا آپ کے پاس ڈیلیوری کے لیے اپنی گاڑی ہے؟",

                Certification: "سرٹیفیکیشن",

                Ihavecertifications: "میرے پاس سرٹیفیکیشن ہیں",

                Note: "نوٹ: آپ کی سرٹیفیکیشن بعد میں تصدیق کی جائے گی",

                BecomeFarmer: "کسان پارٹنر بنیں",

                rememberMe: "مجھے یاد رکھیں",

                newtoKC: "کسان کنیکٹ میں نیا"
            }

        }
    }
});

export default i18n;