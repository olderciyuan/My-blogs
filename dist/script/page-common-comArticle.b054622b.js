"use strict";(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([[7361],{9708:function(t,e,l){l.d(e,{Z:function(){return n}});l(5169);function n(t){let e=$("body"),l=$("#cnblogs_post_body"),n=l.find(":header");if(n.length>0){let i=[];$.each(n,(function(){i.push(parseInt($(this)[0].tagName.replace(/H/g,"")))}));let a=function(t){let e=[];for(let l=0;l<t.length;l++)-1===e.indexOf(t[l])&&e.push(t[l]);return e}(i).sort(),o="";$.each(n,(function(){let e=$(this),l=parseInt(e[0].tagName.replace(/H/g,""));if(6===l)return!0;let n=e.attr("id"),i="tid-"+t.__tools.randomString(6);if(e.attr("tid",i),!n||/^[0-9]+.*/.test(n)){if(n){let t=$('.toc a[href="#'+n+'"]');t.length&&t.attr("href","#"+i)}n=i,e.attr("id",n)}let s=a.indexOf(l),c=0===s||-1===s?"":"&nbsp;&nbsp;&nbsp;&nbsp;".repeat(s);o+='<li class="nav-item"><a class="nav-link" href="#'+n+'" goto="'+i+'" onclick="return false;">'+c+e.text()+"</a></li>"}));let s=t.__tools.tempReplacement('<div> <nav id="articleDirectory"> <ul class="nav nav-pills"> ##dirHtml## </ul> </nav> </div>',"dirHtml",o);l.append(s),e.attr("data-bs-spy","scroll"),e.attr("data-bs-target","#articleDirectory"),e.attr("data-bs-offset","0"),e.attr("tabindex","0"),e.scrollspy({target:"#articleDirectory"}),t.__config.articleDirectory.autoWidthScroll||($("#articleDirectory ul li").addClass("articleDirectory-overflow"),$("#articleDirectory ul li a").addClass("articleDirectory-overflow")),t.__event.scroll.handle.push((()=>{let e=$("#articleDirectory");t.__event.scroll.temScroll<t.__event.scroll.docScroll?t.__event.scroll.homeScroll<=t.__event.scroll.docScroll&&e.addClass("articleDirectoryFixed"):t.__event.scroll.homeScroll>=t.__event.scroll.docScroll&&e.removeClass("articleDirectoryFixed")})),t.__event.resize.handle.push((()=>{const e=parseFloat(document.body.clientWidth),l=$("#articleDirectory");if(l.length>0){let n=$("#home").outerWidth(!1),i=l.outerWidth(!0),a=(e-n)/2,o=a-i-40,s=$(".main-header").outerHeight();switch(t.__config.articleDirectory.position){case"left":l.css({top:s+"px",left:(o>0?o:5)+"px",width:(a>190&&a<260?a-20:i)+"px"});break;case"right":default:l.css({top:s+"px",right:(o>0?o:5)+"px",width:(a>190&&a<260?a-20:i)+"px"})}e<=t.__config.articleDirectory.minBodyWeight||a<=190?l.hide():l.show()}})),$("#articleDirectory .nav-link").click((function(){let e=$(':header[tid="'+$(this).attr("goto")+'"]');e.length&&t.__tools.actScroll(e.offset().top+3,500)}))}}},8991:function(t,e,l){function n(t){return(t=>{t=t.replace(/[\r\n]/g,"");let e=$("#digg_count"),l=t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*推荐\s*\(([0-9]*)\).*/)||t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\(([0-9]*)\).*评论\s*\(([0-9]*)\).*/)||t.match(/.*posted\s*@\s*([0-9\-:\s]{16}).*/);return{date:void 0===l[1]?"1970-01-01 00:00":l[1],vnum:void 0===l[2]?"0":l[2],cnum:void 0===l[3]?"0":l[3],tnum:void 0===l[4]?e.length?e.text():"0":l[4]}})(t)}l.d(e,{Z:function(){return n}})},3784:function(t,e,l){l.r(e),l.d(e,{default:function(){return c}});var n=l(8991);function i(t){(()=>{const e=$("#cb_post_title_url").text();t.__config.animate.articleTitle.enable?function(t,e,l,n,i,a){void 0===n&&(n=["#fff"]);let o=!0,s=document.getElementById(l),c=1,r=1,d=!1,f=document.getElementById(e);s.innerHTML="_",f.setAttribute("style","color:"+n[0]);let _=window.setInterval((function(){if(0===c&&!1===d)d=!0,f.innerHTML=t[0].substring(0,c),window.setTimeout((function(){let e=n.shift();n.push(e);let l=t.shift();t.push(l),r=1,f.setAttribute("style","color:"+n[0]),c+=r,d=!1}),1e3);else if(i&&c===t[0].length+1&&!1===d)d=!0,window.setTimeout((function(){r=-1,c+=r,d=!1}),1e3);else if(!1===d){let e=t[0].substring(0,c);i||e!==t[0]?(f.innerHTML=t[0].substring(0,c),c+=r):window.clearInterval(_)}a&&a()}),180);window.setInterval((function(){!0===o?(s.style.visibility="hidden",o=!1):(s.style.visibility="visible",o=!0)}),400)}([e],"sbTitleText","sbTitleConsole",["#fff"],!1,t.__tools.setDomHomePosition):$("#sbTitleText").text(e).css("color","#fff"),$(".inner").css("max-width","100vw"),t.__tools.setDomHomePosition()})(),$("#articleInfo").append('<p class="article-info-text"></p>'),t.__timeIds.postDescTid=window.setInterval((()=>{if("..."!==$("#post_view_count").text()&&"..."!==$("#post_comment_count").text()){let e=$(".postDesc").show().text();$("#articleInfo p.article-info-text").html(function(e){let l=(0,n.Z)(e),i=$("#cnblogs_post_body").text().length;return'<span class="postMeta"><i class="iconfont icon-time1"></i>'+l.date.replace(/-/g,"/").substr(2)+'<i class="iconfont icon-browse"></i>'+l.vnum+'<i class="iconfont icon-interactive"></i>'+l.cnum+'<i class="iconfont icon-hot"></i>'+l.tnum+'<br><i class="iconfont icon-wenzi4"></i>'+i+'<i class="iconfont icon-shangwutubiao-"></i>'+t.__tools.minToTime(i/500)+" ~ "+t.__tools.minToTime(i/300)+"</span>"}(e)),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.postDescTid)}}),1e3),t.__timeIds.articleInfoClassTId=window.setInterval((()=>{let e=$("#BlogPostCategory").find("a");e.length>0&&($.each(e,(t=>{let l=$(e[t]);l.prepend('<span class="iconfont icon-marketing_fill"></span>'),$("#articleInfo").append('<a href="'+l.attr("href")+'" target="_blank"><span class="article-info-tag article-tag-class-color">'+l.text()+"</span></a>")})),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoClassTId))}),1e3),t.__timeIds.articleInfoTagTId=window.setInterval((()=>{let e=$("#EntryTag").find("a");e.length>0&&($.each(e,(t=>{let l=$(e[t]);l.prepend('<span class="iconfont icon-label_fill"></span>'),$("#articleInfo").append('<a href="'+l.attr("href")+'" target="_blank"><span class="article-info-tag article-tag-color">'+l.text()+"</span></a>")})),t.__tools.setDomHomePosition(),t.__tools.clearIntervalTimeId(t.__timeIds.articleInfoTagTId))}),1e3)}var a=l(2928);function o(t){t.__timeIds.commentTId=window.setInterval((()=>{$(".feedbackItem").length>0&&((()=>{let t=$(".feedbackItem");t.length>0&&($.each(t,(e=>{let l=$(t[e]),n=l.find(".feedbackCon"),i=l.find(".feedbackListSubtitle"),o=n.length?n.find(".blog_comment_body"):[],s="",c=o.length?o.attr("id").split("_"):void 0;if(c&&c.length>0){let t=c[c.length-1],e=t.toString().match(/[0-9]/g);$.isArray(e)&&(t=e.join(""));let n=$("#comment_"+t+"_avatar"),i=n.length>0?$.trim(n.text()):a,o=$("#a_comment_author_"+t);s='<div class="feedbackAvatar"><a href="'+(o.length?o.attr("href"):"javascropt:void(0);")+'" target="_blank"><img src="'+i+'"/></a></div>',l.prepend(s)}i.length&&i.find(".louzhu").length&&i.addClass("feedbackListSubtitle-louzhu")})),$(t[0]).css("padding-top","0"),$(t[t.length-1]).css("padding-bottom","0"))})(),t.__tools.clearIntervalTimeId(t.__timeIds.commentTId))}),1e3)}var s=l(9708);function c(t){t.__config.animate.articleBanner.enable&&l.e(5561).then(l.bind(l,7715)),(()=>{for(let t=0;t<=10;t++)setTimeout((function(){let t=$("#main");t.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),t.find(".cnblogs-post-body").removeClass("cnblogs-post-body")}),500*t)})(),i(t),"books"!==t.__status.pageType&&(0,s.Z)(t),function(t){t.__timeIds.greenChannelDiggTId=window.setInterval((()=>{let e=$("#green_channel_digg");e.length&&(e.after('<button class="custom-btn btn-11" onclick="'+e.attr("onclick")+'">推荐该文<div class="dot"></div></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelDiggTId))}),1e3),t.__timeIds.greenChannelFollowTId=window.setInterval((()=>{let e=$("#green_channel_follow");e.length&&(e.after('<button class="custom-btn btn-12" onclick="'+e.attr("onclick")+'"><span>关注博主</span><span>关注博主</span></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelFollowTId))}),1e3),t.__timeIds.greenChannelFavoriteTId=window.setInterval((()=>{let e=$("#green_channel_favorite");e.length&&(e.after('<button class="custom-btn btn-7" onclick="'+e.attr("onclick")+'"><span>收藏本文</span></button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelFavoriteTId))}),1e3),t.__timeIds.greenChannelWeiboTId=window.setInterval((()=>{let e=$("#green_channel_weibo");e.length&&(e.after('<button class="custom-btn btn-15" onclick="'+e.attr("onclick")+'">分享微博</button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelWeiboTId))}),1e3),t.__timeIds.greenChannelWechatTId=window.setInterval((()=>{let e=$("#green_channel_wechat");e.length&&(e.after('<button class="custom-btn btn-13" onclick="'+e.attr("onclick")+'">分享微信</button>'),t.__tools.clearIntervalTimeId(t.__timeIds.greenChannelWechatTId))}),1e3)}(t),function(t){let e=t.__config.articleSuffix.imgUrl?t.__config.articleSuffix.imgUrl:t.__config.info.avatar?t.__config.info.avatar:a,l=$("#articleAuthor"),n=$("#articleSource"),i=l.length?l.val():t.__config.info.name,o=n.length?n.val():t.__status.url,s=n.length?n.val():t.__status.homeUrl,c=[["origin",l.length||n.length?"原":"本"],["imgUrl",e],["homeUrl",s],["author",i],["source",o],["aboutHtml",t.__config.articleSuffix.aboutHtml?t.__config.articleSuffix.aboutHtml:'评论和私信会在第一时间回复。或者<a href="https://msg.cnblogs.com/msg/send/'+t.__status.user+'" target="_blank">直接私信</a>我。'],["copyrightHtml",t.__config.articleSuffix.copyrightHtml?t.__config.articleSuffix.copyrightHtml:'本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" alt="BY-NC-SA" title="BY-NC-SA" target="_blank">BY-NC-SA</a> 许可协议。转载请注明出处！'],["supportHtml",t.__config.articleSuffix.supportHtml?t.__config.articleSuffix.supportHtml:'如果您觉得文章对您有帮助，可以点击文章右下角<strong><span style="color: #ff0000; font-size: 12pt;">【<a id="post-up" onclick="votePost('+t.__status.articleId+',\'Digg\')" href="javascript:void(0);">推荐</a>】</span></strong>一下。']],r=t.__tools.batchTempReplacement('<span class="articleSuffix-flg"> <br><p class="essaySuffix-eof">__EOF__</p> <div id="articleSuffix"> <div class="articleSuffix-bg"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.78 155.96"> <path d="M10.5,99.81a1.9,1.9,0,0,0-.53-.09,1.66,1.66,0,0,0-1.64,1.65A1.64,1.64,0,0,0,10,103a1.57,1.57,0,0,0,.87-.25l26.76,26.82.45-1.08L11.52,101.91A1.65,1.65,0,0,0,10.5,99.81Zm-.13,2a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.58.58,0,0,1,.57-.57h0a.57.57,0,0,1,.56.58A.55.55,0,0,1,10.37,101.77Z" style="fill:#c5c9e0"></path><path d="M56.15,117.58H39.06l0-.09a1.65,1.65,0,0,0-1.36-1H37.5a1.65,1.65,0,1,0,1.56,2.19H55.7L92.92,156h41.44v-1.08h-41Zm-18.25.94a.56.56,0,0,1-.79,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h0a.58.58,0,0,1,.57.58A.54.54,0,0,1,37.9,118.52Z" style="fill:#c5c9e0"></path><path d="M23.52,50.32a1.65,1.65,0,0,0,1.55-1.11H55.28l48-48.13h31.06V0H102.85l-48,48.13H25.07a1.64,1.64,0,0,0-2.09-1,1.64,1.64,0,0,0,.54,3.2Zm0-2.21a.57.57,0,0,1,0,1.13.57.57,0,1,1,0-1.13Z" style="fill:#c5c9e0"></path><polygon points="102.86 0 102.86 0 102.86 0 102.86 0" style="fill:#c5c9e0"></polygon><path d="M107.72,12.14h26.64V11.07H107.27L57.4,61H3.09a1.66,1.66,0,0,0-1.45-.86H1.52A1.65,1.65,0,1,0,2.81,63a1.59,1.59,0,0,0,.45-.87H57.85ZM2.05,62.23a.57.57,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.56-.57h.09a.57.57,0,0,1,.32,1Z" style="fill:#c5c9e0"></path><path d="M134.36,43.22V42.14h-22.3l-9.62,9.63a1.64,1.64,0,0,0-2.19.77,1.61,1.61,0,0,0-.17.71,1.65,1.65,0,1,0,3.29,0,1.61,1.61,0,0,0-.16-.72l9.3-9.32Zm-32.64,10.6a.57.57,0,0,1,0-1.13.57.57,0,0,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M147,52.3l-9,9H111.48a1.64,1.64,0,0,0-1.61-1.33h-.14a1.65,1.65,0,1,0,1.6,2.41h27.19l9.26-9.29L147,52.3Zm-37.15,9.85a.56.56,0,0,1-.56-.57h0a.56.56,0,0,1,.56-.56h0a.57.57,0,1,1,0,1.13Z" style="fill:#c5c9e0"></path><path d="M66.79,75.35l11,11.06h56.53V85.33H78.27l-11-11.06H49.49L37.12,86.67a1.64,1.64,0,0,0-2.09,1,1.61,1.61,0,0,0-.09.54,1.65,1.65,0,0,0,3.29,0,1.68,1.68,0,0,0-.26-.89l12-12ZM36.58,88.79a.57.57,0,1,1,.57-.56A.57.57,0,0,1,36.58,88.79Z" style="fill:#c5c9e0"></path><path d="M110.61,95.55,92.8,113.4a1.62,1.62,0,1,0,.77.76l17.49-17.53h23.31V95.55ZM92.49,115.28a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,.57-.57h0a.58.58,0,0,1,.56.58A.55.55,0,0,1,92.49,115.28Z" style="fill:#c5c9e0"></path><path d="M97.89,122.3H76.62L64.2,109.85a1.65,1.65,0,0,0-.77-2.2,1.77,1.77,0,0,0-.72-.17h-.14a1.65,1.65,0,0,0,.15,3.29,1.58,1.58,0,0,0,.71-.17l12.74,12.77H98.34l17.48-17.52h18.54v-1.08h-19ZM63.12,109.53a.56.56,0,0,1-.8,0,.58.58,0,0,1-.17-.41.57.57,0,0,1,1.14,0A.54.54,0,0,1,63.12,109.53Z" style="fill:#c5c9e0"></path> </svg> </div> <div class="articleSuffix-left"> <img src="##imgUrl##"/> </div> <div class="articleSuffix-right"> <item> <li> <b>##origin##文作者：</b> <a href="##homeUrl##" target="_blank">##author##</a> </li> <li> <b>##origin##文链接：</b> <a href="##source##" target="_blank">##source##</a> </li> <li> <b>关于博主：</b> ##aboutHtml## </li> <li> <b>版权声明：</b> ##copyrightHtml## </li> <li> <b>声援博主：</b> ##supportHtml## </li> </item> </div> <div style="clear:both"></div> </div> </span>',c);$("#cnblogs_post_body").append(r)}(t),o(t)}},2928:function(t,e,l){t.exports=l.p+"images/53abc64338825f4038d6.webp"}}]);