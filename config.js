
const config = {
  // The three items here are mandatory and are basic information about your startup that is vital for SEO. 
  // The domain name part is not required “https://”, “www”, and finally no slash. just the naked domain.
  // The contact email is used for the support email in the app, and also for the Mailgun integration (if you use it).
  appName:        "OneDay.Build",
  appDescription: "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.",
  domainName:     "OneDay.Build",
  contactEmail:   "bassnova@gmail.com",



  // Next is the basic setup of the platform
  // The platform is set up in multiple languages, with default languages. If you don't need to configure multi-language, please download the source code of the version without multi-language switch.
  // I18n multiple languages package are available in root/libs/i18n/messages. default language is en.json. If you need to add more languages, please add them in this folder. 
  // You can also add more languages use a language translation tool.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
  // Set the theme of the platform, dark or light style. default is dark.
  // Below you can set the base background color and text color for dark and light.This can be a custom color, like: "#f37055". or a tailwindcss style name, like: "bg-primary-500"
  // Set the highlight color of the platform in main, if you think the default value is OK, you can not change it.
  colors: {
    theme: "light",
    darkstyle: ["bg-slate-900","text-white"],
    lightstyle: ["bg-zinc-100","text-zinc-800"],
    main: "#4f46e5",
  },
  


  // Here are the settings for the platform features.
  // auth - REQUIRED
  // stripe - REQUIRED
  // aws - OPTIONAL
  // mailgun - OPTIONAL
  // crisp - OPTIONAL

  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },

  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 99,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "You need more power",
        price: 99,
        priceAnchor: 149,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marc@mg.shipfa.st",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marc.louvion@gmail.com",
  },


};

export default config;
