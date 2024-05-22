jwplayer("my-video").setup({
	file: "https://prod-sports-hin-gm.jiocinema.com/hls/live/2100329/hd_akamai_androidmob_avc_hin_ipl_s2_m2190524/master.m3u8",
	image: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/8/key-art/got-s8-ka-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
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