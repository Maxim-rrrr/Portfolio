import{imagesScrollDown,imagesScrollUp,startImagesScrollDown,startImagesScrollUp,endImagesScrollDown,endImagesScrollUp}from"./scene.js";import{contentScrollDown,contentScrollUp}from"./content.js";import{scrollTime}from"./config.js";let scroll=!1;$(document).ready(()=>{$("html").css("overflow-y","hidden"),$(window).bind("mousewheel DOMMouseScroll MozMousePixelScroll",e=>{const l=parseInt(e.originalEvent.wheelDelta||-e.originalEvent.detail);scroll||(l>=0?scrollUp():scrollDown())})});let screenIndex=0;export const scrollUp=()=>{screenIndex>0&&!scroll&&(scroll=!0,contentScrollUp(screenIndex),1==screenIndex?startImagesScrollUp():5===screenIndex?endImagesScrollUp():imagesScrollUp(),$(".indication-"+screenIndex).removeClass("indication--active"),setTimeout(()=>{scroll=!1,screenIndex-=1},scrollTime))};export const scrollDown=()=>{screenIndex<5&&!scroll&&(scroll=!0,contentScrollDown(screenIndex),0==screenIndex?startImagesScrollDown():4===screenIndex?endImagesScrollDown():imagesScrollDown(),$(".indication-"+(screenIndex+1)).addClass("indication--active"),setTimeout(()=>{scroll=!1,screenIndex+=1},scrollTime))};$(".scroll-controll__down").on("click",()=>{scrollDown()}),$(".scroll-controll__up").on("click",()=>{scrollUp()});