import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';




export const footerData = {
</div>

        <!-- Legal line -->
        <p class="text-sm text-muted leading-relaxed max-w-sm">
          Ambathy Nature Research Foundation (ANRF) is registered as a
          <strong>Section 8 Not-for-Profit Company</strong> under the Companies Act, 2013.  
          Registered with DARPAN. CIT Number (to be added).
        </p>

        <!-- Green Hosting Badge -->
        <img 
          src="https://app.greenweb.org/api/v3/greencheckimage/earthship1.pages.dev?nocache=true" 
          alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
          class="w-48 h-auto mt-2"
        />

      </div>
  
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: <p> Running on green hosting 🌳 </p>
  footNote: `
    © 2025 ANRF· All rights reserved.
  `,
};
