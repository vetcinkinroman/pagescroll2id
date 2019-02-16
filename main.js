//плавная прокрутка сраниц
$(document).ready(function() {

    $("nav a,a[href='#top'],a[href='#resume'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
   });

 });    