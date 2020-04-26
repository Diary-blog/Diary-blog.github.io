module.exports = {
  /** Site MetaData (Required all)*/
  title: `📙`,                           // (* Required)
  description: `Bookmark`,          // (* Required)
  author: `Author`,                         // (* Required)
  siteUrl: 'https://diary-blog.github.io/bookmark',                      // (* Required)

  /** Header */
  profileImageFileName: 'icecream.png',

  /** info */
  comment: 'Facebook URL BookMark',
  name: '',
  company: '',
  location: '/bookmark/',
  email: '',
  website: '',
  linkedin: '',
  facebook: '',
  instagram: '',
  github: '',

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: '',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: '', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
