jwplayer("my-video").setup({
	file: "https://prod-sports-hin-gm.jiocinema.com/hls/live/2100329/hd_akamai_androidmob_avc_hin_ipl_s2_m2220524/master.m3u8",
	image: "https://y20india.in/rr-vs-rcb-ipl-match-19-preview/",
	primary: "html5",
	advertising: {
		client: "vast",
	schedule: {
		"myAds":{
		"offset":"pre",
		"tag":"https://ad-stage.visiblemeasures.com/a/2/?pl=218579"}
		}
	}
});