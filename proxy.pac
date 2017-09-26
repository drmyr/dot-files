var comNetUrlsToBlock = {
			useHost: true,
			regexPrefix: "*[^a-z]",
			regexSuffix: ".(com|net)[^a-z]*",
			list: ["double-click",
			"doubleclick",
			"doubleclickbygoogle",
			"googleadservices",
			"googleadsyndication",
			"google-analytics",
			"googleapis",
			"googlecode",
			"googlesyndication",
			"googletagmanager",
			"googletagservices",
			"accounts.google",
			"csi.gstatic",
			"fonts.gstatic",
			"2checkout",
			"2mdn",
			"2o7",
			"33across",
			"3lift",
			"4dsply",
			"accmgr",
			"adadvisor",
			"adblade",
			"adbrn",
			"addroll",
			"addthis",
			"addthisedge",
			"addtoany",
			"adform",
			"adformdsp",
			"adgrx",
			"adition",
			"adkernel",
			"adlucent",
			"adnxs",
			"adobedtm",
			"adobetm",
			"adroll",
			"adrtx",
			"ads234",
			"ads345",
			"adsafeprotected",
			"adsymptotic",
			"adtechus",
			"advertising",
			"adx1",
			"adzerk",
			"afy11",
			"agkn",
			"akamaihd",
			"alcmpn",
			"alooma",
			"amazon-adsystem",
			"amazonaws",
			"amazontrust",
			"amgdgt",
			"analytics.msnbc.msn",
			"analytics.twitter",
			"analytics.yahoo",
			"answerscloud",
			"apis.google",
			"appdynamics",
			"appier",
			"apxlv",
			"areyouahuman",
			"atdmt",
			"atwola",
			"auto.search.msn",
			"azureedge",
			"baidu",
			"basebanner",
			"baynote",
			"bazaarvoice",
			"bc.yahoo",
			"bdex",
			"betrad",
			"bf-ad",
			"bidswitch",
			"bing",
			"bizographics",
			"bizrate",
			"bkrtx",
			"bluecava",
			"blueconic",
			"bluekai",
			"bnmla",
			"bounceexchange",
			"braintreegateway",
			"bridgetrack",
			"brightcove",
			"btrll",
			"bttrack",
			"buysellads",
			"budgetedbauer",
			"c1exchange",
			"carbonads",
			"cardlytics",
			"casalemedia",
			"cbsi",
			"cbsiinteractive",
			"cbsistatic",
			"cedexis",
			"chango",
			"chartbeat",
			"choicestream",
			"circularhub",
			"clickagy",
			"clients1.google",
			"clksite",
			"cloudflare",
			"clrstm",
			"cnevids",
			"cnzz",
			"cogocast",
			"collective-media",
			"company-target",
			"comscore",
			"condenastdigital",
			"conductrics",
			"connexity",
			"consumertrack",
			"contextweb",
			"conversionlogic",
			"convertkit",
			"coresecure",
			"crazyegg",
			"creditcards",
			"crispadvertising",
			"crisppremium",
			"criteo",
			"crsspxl",
			"crwdcntrl",
			"csdata1",
			"cse.google",
			"ctnsnet",
			"d*.cloudfront",
			"d1z2jf7jlzjs58.cloudfront",
			"d26t7ex48mr4bn.cloudfront",
			"d2q79iu7y748jz.cloudfront",
			"d31qbv1cthcecs.cloudfront",
			"d37sfqor0g25ph.cloudfront",
			"d3qxwzhswv93jk.cloudfront",
			"d5nxst8fruw4z.cloudfront",
			"d8rk54i4mohrb.cloudfront",
			"dwgyu36up6iuz.cloudfront",
			"dwum8argi892z.cloudfront",
			"dy48bnzanqw0v.cloudfront",
			"dff7tx5c2qbxc.cloudfront",
			"dnkzzz1hlto79.cloudfront",
			"dnn506yrbagrg.cloudfront",
			"dp8hsntg6do36.cloudfront",
			"daddyanalytics",
			"decenthat",
			"demandbase",
			"demdex",
			"deployads",
			"developermedia",
			"digg",
			"disqus",
			"disquscdn",
			"dmtry",
			"domdex",
			"doubleverify",
			"dpclk",
			"dpmsrv",
			"eloqua",
			"en25",
			"ensighten",
			"eviltracker",
			"exelator",
			"eyeota",
			"eyereturn",
			"eyeviewads",
			"facebook",
			"fallingfalcon",
			"fastclick",
			"fastly",
			"fbcdn",
			"flashtalking",
			"flite",
			"footprint",
			"fonts",
			"force",
			"foresee",
			"fqtag",
			"fullstory",
			"fwmrm",
			"gannett-cdn",
			"geovisite",
			"ggpht",
			"gigya",
			"globalwebindex",
			"go",
			"go-mpulse",
			"gravatar",
			"grvcdn",
			"gtrk.s3.amazonaws",
			"gumgum",
			"gwallet",
			"haleymarketing",
			"hfc195b",
			"hlserve",
			"hotjar",
			"hs-analytics",
			"hubspot",
			"hupso",
			"iab",
			"iasds01",
			"ib-ibi",
			"images-amazon",
			"imrworldwide",
			"imshopping",
			"inbenta",
			"indexww",
			"informars",
			"innovid",
			"insightexpressai",
			"inspectlet",
			"instinctiveads",
			"interstateanalytics",
			"ip2map",
			"ipowow",
			"ipredictive",
			"ixiaa",
			"jivox",
			"jiathis",
			"jsonip",
			"jsrdn",
			"jumptap",
			"kampyle",
			"ketchuponnews",
			"kinja",
			"kinja-static",
			"kiosked",
			"kissmetrics",
			"kixer",
			"komoona",
			"krxd",
			"launchbit",
			"lifestreet",
			"lijit",
			"lifefyre",
			"livechatinc",
			"liveperson",
			"liverail",
			"llnwd",
			"load.s3.amazonaws",
			"localytics",
			"lpsnmedia",
			"lrcdn",
			"marketo",
			"mathtag",
			"maxymiser",
			"mdotlabs",
			"mdotm",
			"media",
			"media.business.spectrum",
			"media6degrees",
			"mediavoice",
			"mediawallahscript",
			"meida6degrees",
			"mentad",
			"metric.gstatic",
			"mixpanel",
			"mkt61",
			"ml314",
			"moatads",
			"monetate",
			"mookie1",
			"mouseflow",
			"mparticle",
			"mpeasylink",
			"msadcenter.msn",
			"mxptint",
			"myvisualiq",
			"nativeads",
			"netmng",
			"netseer",
			"newrelic",
			"newsinc",
			"nexac",
			"npttech",
			"nr-data",
			"nuggad",
			"olark",
			"omtrdc",
			"onesignal",
			"onestatfree",
			"onscroll",
			"ooyala",
			"opendsp",
			"openx",
			"optimahub",
			"optimizely",
			"optnmstr",
			"outbrain",
			"owneriq",
			"pages03",
			"pagefair",
			"pardot",
			"parsely",
			"peer39",
			"perfectmarket",
			"petametrics",
			"pippio",
			"pixel.wp",
      			"placemytag",
			"platform.linkedin",
			"platform.twitter",
			"polarmobile",
			"postrelease",
			"ppjol",
			"pricegrabber",
			"profile.ams50.cloudfront",
			"pro-market",
			"pubmatic",
			"pubmine",
			"pubnation",
			"pushengage",
			"qualtrics",
			"quantcount",
			"quantserve",
			"quantserver",
			"query.yahoo",
			"questionmarket",
			"raasnet",
			"rapidscansecure",
			"rapleaf",
			"recruitics",
			"reson8",
			"revcontent",
			"revsci",
			"rfihub",
			"rlcdn",
			"ru4",
			"rubiconproject",
			"rundsp",
			"rvty",
			"s3.amazonaws",
			"sail-horizon",
			"sascdn",
			"sbal4kp",
			"scanscout",
			"scorecardresearch",
			"securedvisit",
			"securemetrics.apple",
			"servedby-buysellads",                
			"servedbyopenx",
			"serving-sys",
			"services.visualstudio",
			"sharethis",
			"sharethrough",
			"shinystat",
			"simplereach",
			"sitefinder.verisign",
			"sitemeter",
			"sitescout",
			"skimresources",
			"smaato",
			"smartadserver",
			"smartclip",
			"sonobi",
			"sovrn",
			"spongecell",
			"spotxchange",
			"springserve",
			"sprinkletxt",
			"statcounter",
			"staticstuff",
			"staticworld",
			"stats.wp",
			"statsevent",
			"summerhamster",
			"sundaysky",
			"survata",
			"surveymonkey",
			"switchadhub",
			"swoop",
			"taboola",
			"tailsweep",
			"tapad",
			"tealiumiq",
			"techhive",
			"tekblue",
			"telemetry.microsoft",
			"theadex",
			"thebrighttag",
			"tidaltv",
			"tingyun",
			"tinypass",
			"tiqcdn",
			"townnews",
			"trafficjunky",
			"travelaudience",
			"tribalfusion",
			"truoptik",
			"truste",
			"tubemogul",
			"turn",
			"twimg",
			"tynt",
			"typekit",
			"undertone",
			"univide",
			"urbanairship",
			"usabilla",
			"userecho",
			"uts-af",
			"videoamp",
			"video.google",
			"vindicosuite",
			"visiblemeasures",
			"visualdna",
			"visualrevenue",
			"visualwebsiteoptimizer",
			"vmweb",
			"voicefive",
			"w3counter",
			"w55c",
			"weborama",
			"wishabi",
			"wtp101",
			"xad",
			"xg4ken",
			"xpanama",
			"yieldify",
			"yieldlab",
			"yieldmo",
			"yieldoptimizer",
			"yieldpartners",
			"yimg",
			"yldbt",
			"youbora",
			"youtubei.youtube",
			"youtube-nocookie",
			"ytimg",
			"yume",
			"zemanta",
			"zendesk",
			"zergnet",
			"zqtk"
]
		  };

var wordsToBlock = {
			useHost: false,
			regexPrefix: "*",
			regexSuffix: "*",
			list: [
				"_logs",
				"ad2",
				"ad_allowed",
				"adchannel",
				"adexchange",
				"adfarm",
				"[^a-z]ads[^a-z]",
				"adsense",
				"adserver",
				"ad_radar",
				"advertising",
				"adzone",
				"analytics.",
				"analytics=",
				"async-ads",
				"browser-metrics",
				"beacon",
				"[^a-z]callback",
				"campaign",
				"countdata",
				"count-data",
				"csi_204",
				"double*ssl",
				"eventtrack",
				"fingerprint",
				"gen_204",
				"generate_204",
				"get_midroll_info",
				"get_video_info",
				"get_video_metadata",
				"googleplus",
				"impression",
				"instream_ad",
				"log_event",
				"log_interaction",
				"optimizely",
				"mac_204",
				"metrics.",
				"metrika",
				"monitoring",
				"page_view",
				"pagead",
				"pageview",
				"page-view",
				"[^a-z]ping",
				"pixel",
				"player_204",
				"prebid",
				"pre-bid",
				"ptracking",
				"[^a-z]radar[^a-z]",
				"recaptcha",
				"referer=",
				"referrer=",
				"showads",
				"stats",
				"syndication",
				"watch_autoplayrenderer",
				"watch_fragments",
				"www-tampering",
				"tagging",
				"tracker",
				"tracking",
				"videogoodput"
			]
		   };

var nonComNetUrlsToBlock = {
		useHost: true,
		regexPrefix: "*",
		regexSuffix: "[^a-z]*",
		list: ["abbp1.pw",
		"ampproject.org",
		"1rx.io",
		"districtm.ca",
		"google.se",
		"adap.tv",
		"adk2.co",
		"adsrvr.org",
		"adtech.de",
		"akstat.io",
		"app.link",
		"atomdata.io",
		"atom-data.io",
		"atsfi.de",
		"bidr.io",
		"bildstatic.de",
		"branch.io",
		"browser-update.org",
		"contactimpact.de",
		"cpx.to",
		"df-srv.de",
		"do-not-tracker.org",
		"emetriq.de",
		"fyre.co",
		"gemius.pl",
		"geni.us",
		"hrnorth.se",
		"indeed.com/rpc",
		"ioam.de",
		"keywee.co",
		"lnk.to",
		"mailmunch.co",
		"misosoup.io",
		"ntv.io",
		"partyfactory.ca",
		"po.st",
		"prfct.co",
		"roq.ad",
		"rutarget.ru",
		"simpli.fi",
		"spotad.co",
		"statuspage.io",
		"trackersimulator.org",
		"videohub.tv",
		"volvelle.tech",
		"weborama.fr",
		"weborama.io",
		"workey.se",
		"wraug5vv72b28fch.pro",
		"b2rrns9dgbx56tf5kc.agency",
		"a1749y92ai7h2uwi4v7e.club",
		"gff6166tdt2i4fc155zi11.info",
		"8m5sew59gr.bid",
		"wt1.rqtrk.eu",
		"xplosion.de",
		"yadro.ru",
		"gfx.ms",
		"onestore.ms",
		"[^a-z]t.co",
		"tns-counter.ru",
		"vgwort.de"
]
};

var listsToBlock = [wordsToBlock, comNetUrlsToBlock, nonComNetUrlsToBlock];

var bypassList = {
			useHost: true,
			regexPrefix: "*",
			regexSuffix: "*",
			list: ["localhost",
				"better.fyi",
				"ajax.googleapis.com",
				"maps.googleapis.com",
				"local.kalibrate",
//				"cdnjs.cloudflare",
				"chart.apis.google.com"
				]
		 };

function isValueInList(val, listObj) {
	for(var listItem of listObj.list) {
		if(shExpMatch(val, listObj.regexPrefix + listItem + listObj.regexSuffix)) {
			alert("TRIGGER: " + listItem.toString());
			return true;
		}
	}
	return false;
}

function FindProxyForURL(url, host) {
	if(!isValueInList(host, bypassList)) {
		for(var list of listsToBlock) {
			if(isValueInList(url, list)) {
				alert("BLOCKED: " + url.toString());
				return "PROXY 127.0.0.1:0000";
			}
		}
	}
	alert("DIRECT: " + url.toString());
	return "DIRECT";
}
