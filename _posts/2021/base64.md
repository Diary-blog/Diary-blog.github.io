---
title: 💡 피그마, 일러스트, 포토샵에서 저장한 png와 jpg는 base64 인코딩과 디코딩에서 파일사이즈 차이가 생깁니다.
date: 2021-07-17
update: 2021-07-17
tags:
  - png
  - jpg
  - svg
  - Frontend
  - CSS
  - story
keywords: story, Frontend, Developer, JS, CSS, jpg, png
read: 2m 10s
cover: ./img/ic0.png
---

![](img/ic0-1.png)

## Incoding base64 to png & jpg or svg

base64로 인코딩 할 때  
원본 이미지가 jpg와 png에 따라 결과 차이가 존재하는지 에 대해 

궁금증이 생겨서 직접 해보기로 했습니다.

## 아이콘 준비

제가 실험해볼 Picture icon 입니다.

아이콘 사이즈는 24 x 24 입니다.


Figma 에서는 canvas로 보여지기 때문에

웹에서 바로 base64를 열어볼 수 없어서

png 와 jpg 를 export 해서 살펴보기로 했습니다.

![](img/ic1.png)


쉽게 변환해서 결과만 보기위해 구글에 png to base64 와 jpg to base64로 검색하여 사이트에서 직접 변환하였습니다.


## incoding

### png, jpg to base64 incoding

figma에서 export한 파일 사이즈 입니다.
> png는 239 B  
> jpg는 1.36KB

png는 [이곳](https://codebeautify.org/png-to-base64-converter) 에서 변환하였고
![](img/ic2.png)


jpg 는 [이곳](https://onlinejpgtools.com/convert-jpg-to-base64) 에서 변환 하였습니다.
![](img/ic3.png)

incoding 결과는 

*png*

> iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgB7ZSLCYAwDERPcfDbzFHsJlURS0n/xoJgHwSFXHPpFxg0sh1hlbH5BSdhYPEOru5SEjQSNDijMxoD4uqYOVFqD2qWyEbqBONzMyDy3VF8q7iPGsV/6/iiQAYTeorcY4OYCSM5lYFfiImc2uCMtULj6P5UfPom/9TAQI/BoIUdD91bjFg0XxMAAAAASUVORK5CYII=


*jpg*

> /9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAYABgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/v21/wBtf/gqR/w9I8O/8E5/+Cc/h39gQTj9gTT/ANtfxb4t/bX0/wDaIMTRH9ojxL8C9V8O+HdV+BfiVXjkjdfB+p6fp+p+D5FmWTxLc3PiWAwaXpdwAcX4/wDiF/wcufCjwb4h+I3xS8cf8G6Pw1+HvhHT31bxX478f+Jv2+vBvg3wxpUckcUmp+IfFHiK907RNF09JZYo3vNSvra2WSSNGkDOoIB0n7CX7dv/AAUz17/gpnf/ALAn7fdh/wAE9Nb0vW/+Cej/ALdvw6+Iv7CSfH/UNF1TRdQ+P/hb4L+GrC/8S/GjxTcW+pWepW9x4q1100LwqbSS0Pha/sPFN1HdalpsIB/N7/wdO/tuftL/ALCn/BXrwN8Qf2V/iTqHwl+IXxK/4JYfDP4Q6z460K2tJPE2leDbz9s34y/EvUIPDd9eRXEekahqWt/DDw7p19frbzyTeHrnW9JCoupvNEAesa//AMHR/wCxT+1v/wAEgPjB8Lv2/wD4CW/xd/ak1LR/Dvw08Rfs0WaeLfDHwx/aE12G8t/EvhL4xWPjnwhfaTqnwy8L+HPEnhXTPFPjLTdJ8Q6Z4w8MeKbDSoPh/PcRavpV7pIB7v8A8ENP2/vg3/wUQ/4LH/Cz4kfBb4Wf8KO0n4Lf8EAdO/Zi8U/ByyE83hX4beKvhL+2t4Ekt/DHw/1O5kludY+H8HgnxL4MvPCl5eN/aNnp16uiasZNW0i+mlAPZP8Ag4X/AODej9sv/grL+2X8Lv2jf2cvij+zJ4M8H+DP2ZPCHwT1jR/jZ4v+KnhvxJL4k8N/FT4y+Op9T0yDwL8GviTpdzodzpfxJ0u1hmutUsL9b+w1BH0/7P8AZ7iYA/B3/iCp/wCCpv8A0Xz9gD/w6f7RX/0KtAH7xf8ABvR/wb0ftl/8Emv2y/ij+0b+0b8Uf2ZPGfg/xn+zJ4v+Cej6P8E/F/xU8SeJIvEniT4qfBrx1BqepweOvg18NtLttDttL+G2qWs01rql/ftf3+nomn/Z/tFxCAD/2Q==


<hr/>

### SVG to png, jpg

이번엔 똑같은 아이콘을 figma에서 svg로 export해서 저장하였습니다.

![](img/ic4.png)

저장한 `svg` 파일 사이즈는 806 B 입니다.
![](img/ic4-1.png)

illustrator에서 저장한 svg 파일을 오픈하여  
`웹용으로 저장` 하기로 png를 저장하였습니다.
![](img/ic5.png)


*일러스트에서 웹용으로 저장하기에는 옵션이 3가지가 있습니다.*

> 첫번째는 '없음' 으로 선택해서 저장하면 205 B 이고
![](img/ic5-2.png)

> 두번째는 '아트최적화' 로 선택해서 저장하면 228 B 이고
![](img/ic5-3.png)

> 세번째는 '문자최적화' 로 선택해서 저장하면 257 B 입니다.
![](img/ic5-4.png)


처음에 `피그마`에서 바로 png로 export 할때는 239 B 였는데, svg로 export 한다음

`일러스트`로 열어서 png로 저장하니 똑같은 png 라도 파일 사이즈가 더 작아졌습니다.  
저장한 png 파일 사이즈는 228 B 입니다.
![](img/ic5-1.png)

`포토샵`에서 svg를 열어서 웹용으로 저장으로 png를 저장하면
![](img/ic5-5.png)

파일 사이즈는 1.54KB로 저장되었습니다.
![](img/ic5-6.png)

<hr/>

혹시 변환해주는 다른 사이트에서는 사이즈가 어느정도 나오는지 궁금해서  
구글에 svg to png 를 검색해보았습니다.

[이곳](https://svgtopng.com/) 에서는 235 B 가 나오고
![](img/ic6.png)

[이곳](https://ezgif.com/svg-to-png) 에서는 291 B 가 나왔습니다.
![](img/ic7.png)


<hr/>

png 와 jpg 저장 사이즈에 대해 살펴보기 전에는

동일한 아이콘이더라도 figma 에서 svg 로 저장하는 것과, 일러스트에서 svg 로 저장하는 것이  

코드가 조금씩 차이가 있다는 것을 svg로 css 애니메이션을 만들면서 알았는데요.

이렇게 위에처럼 간단한 아이콘은 상관없지만 다른 svg 파일을 다룰때는  

피그마에서 svg로 저장할때가 훨씬 코드가 깔끔하고 수정하기 쉬웠습니다.

일러스트에서 svg로 저장하고 피그마에서 임포트 한다음 svg로 다시 저장해서 코드를 사용하던적도 있습니다.

일러스트와 피그마는 어떤식으로 SVG를 저장하는지 아래 적어두었습니다.


> 일러스트에서 svg를 ctrl + C로 복사해서 vscode에 그냥 붙여넣기하면 아래와 같이 보여집니다.
```html
<!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px"
	 height="18px" viewBox="0 0 18 18" style="enable-background:new 0 0 18 18;" xml:space="preserve">
<defs>
</defs>
<path d="M2,8.1l2-2l5.5,5.5L13,8.1l3,3V2H2V8.1z M1,0h16c0.3,0,0.5,0.1,0.7,0.3C17.9,0.5,18,0.7,18,1v16c0,0.3-0.1,0.5-0.3,0.7
	S17.3,18,17,18H1c-0.3,0-0.5-0.1-0.7-0.3C0.1,17.5,0,17.3,0,17V1c0-0.3,0.1-0.5,0.3-0.7C0.5,0.1,0.7,0,1,0L1,0z M12.5,7
	c-0.4,0-0.8-0.2-1.1-0.4C11.2,6.3,11,5.9,11,5.5s0.2-0.8,0.4-1.1C11.7,4.2,12.1,4,12.5,4s0.8,0.2,1.1,0.4S14,5.1,14,5.5
	s-0.2,0.8-0.4,1.1C13.3,6.8,12.9,7,12.5,7L12.5,7z"/>
</svg>
```

> 일러스트에서 svg를 파일로 저장한다음 열면 아래와 같이 보여집니다.
```html
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
<path d="M5,11.1l2-2l5.5,5.5l3.5-3.5l3,3V5H5V11.1z M4,3h16c0.3,0,0.5,0.1,0.7,0.3C20.9,3.5,21,3.7,21,4v16c0,0.3-0.1,0.5-0.3,0.7
	S20.3,21,20,21H4c-0.3,0-0.5-0.1-0.7-0.3C3.1,20.5,3,20.3,3,20V4c0-0.3,0.1-0.5,0.3-0.7C3.5,3.1,3.7,3,4,3L4,3z M15.5,10
	c-0.4,0-0.8-0.2-1.1-0.4C14.2,9.3,14,8.9,14,8.5s0.2-0.8,0.4-1.1C14.7,7.2,15.1,7,15.5,7s0.8,0.2,1.1,0.4S17,8.1,17,8.5
	s-0.2,0.8-0.4,1.1C16.3,9.8,15.9,10,15.5,10L15.5,10z"/>
</svg>
```

> 피그마에서 저장한 svg파일을 열면 아래와 같습니다.
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11.1L7 9.1L12.5 14.6L16 11.1L19 14.1V5H5V11.1ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3V3ZM15.5 10C15.1022 10 14.7206 9.84196 14.4393 9.56066C14.158 9.27936 14 8.89782 14 8.5C14 8.10218 14.158 7.72064 14.4393 7.43934C14.7206 7.15804 15.1022 7 15.5 7C15.8978 7 16.2794 7.15804 16.5607 7.43934C16.842 7.72064 17 8.10218 17 8.5C17 8.89782 16.842 9.27936 16.5607 9.56066C16.2794 9.84196 15.8978 10 15.5 10V10Z" fill="black"/>
</svg>
```


## decoding

이제 저장하기는 몇가지 실험했으니 디코딩으로 파일사이즈 변환이 있는지 보겠습니다.

디코딩도 마찬가지로  
figma에서 export한 png 와 jpg 를 먼저 디코딩 하면

png 는 239B 로 인코딩할때 사이즈와 동일합니다. ([이곳](https://base64.guru/converter/decode/image/png)에서 변환하였습니다.)
![](img/ic8.png)

jpg는 1.36KB 로 마찬가지로 인코딩 할때 사이즈와 동일합니다. ([이곳](https://base64.guru/converter/decode/file)에서 변환하였습니다.)
![](img/ic9.png)


Figma에서 svg로 export 해서 `일러스트`에서 png로 저장한 파일을 인코딩하면

> iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIZJREFUeNpiYBgFJIL3QPyfQvwe2UBGNAv+U8mhcHNZCCkgEWA4kInWYU6JBeehLj5PVFiheZGRxOBgxKUfnw/mQzEucAGNJjqS/kMNRmaTqp+gAnQ8n0hfkm0BNkuw+ZIiC5ANmo9DjmILQPg+EWroV1QM6pw8Qi34QAUzPzCMAlIAQIABAC0tXr3zn/P7AAAAAElFTkSuQmCC


Figma에서 svg로 export 해서 `포토샵`에서 png로 저장한 파일을 인코딩하면

> iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNkVFRTI1RTZDQzExRUI5QjU5QzhFMzBCMTc2QTYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxNkVFRTI2RTZDQzExRUI5QjU5QzhFMzBCMTc2QTYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjE2RUVFMjNFNkNDMTFFQjlCNTlDOEUzMEIxNzZBNjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjE2RUVFMjRFNkNDMTFFQjlCNTlDOEUzMEIxNzZBNjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KJ75JAAACpUlEQVR42uzdj1HCMBiH4dRjADaAEeoGjMAIdQJlAtkANyhOoE6AGziCMAFsUJMznJwHNF9pkqZ9f3c5e14q8j2k/5I7sqqqFOlO7igBIAQQQAgggBBAACGAAEIAIZcyku6QZdlxc6pbodvEbhOltrrtdFvbbSV+Vmh2kDQbA7E3u9POtr2tkbi+mVRQjxAzGr50GzMgruag272u79b3OaQAwymmRvMQJ/UJtRaheAfhBM5lLyAEENLoxtD16ngg9asYIRyyCCCAEEAIIIAQQBwz063U7Vv9zV+82d9HvrORT1BtVP0ETZezqvnfDZTrU9q6Oiyl9R0NbGQsdXuq6VPYnw8csvxmqtuzY98i1uFrSCCPnvsDIkze4MQPSIcyBqRb2Q4JJMan70PY/3MoIKW9lwmNsla/a6Vc8zoEkNJeUuYRUAzGwrHvS6wREvJOvTzTL8YKyEJdXwa7lJSv7Tv1UCDllb4xUMb2jn1z0lZKvuYsSZDSoX+qa4VbB7kLdM5wuWnbKNYMewVxxQAlAIgUAxTPIMUN+8ZAGdvXzPsKcmtCohwxZl1A6fKzrBAo/0dG9JHS9YeLPlEuFT8qSgpPe32g1BU9Gkoqj9/bRHEtdhSUlOZD2kCRFjk4SmoTVLegNC1uUJQUZwyboNxa1GAoqU7hSlDaKmYQlJTn1F1Q2i6id5TUFzlcQ/FVPK8ofVh1cg7F9yf5+PcBcUAJdQL28kinT4ut85NPbZ7qm+jb6vc89TfAykVACCCAEEAAIYAAQgABhABCAAGEAAIIAQQQAgggBBACSG9BtpStWyA7yuacg3QHvjbPL0aQr80zL7Booj8wjEWTw3uTEXLcNCNlzkg5i/GuGn71qhiEcNkLCAGEAAIIAQQQAgggBBBASKT8CDAAv/GSng/bLB4AAAAASUVORK5CYII=


다시 디코딩 하면
일러스트에서 png도 인코딩하기 전 파일 사이즈와 동일하게 228 B 가 나오고
![](img/ic10.png)

포토샵에서는 인코딩 하기 전에는 1.54KB 였는데 1.55 KB로 파일사이즈가 조금 더 켜졌습니다.
![](img/ic11.png)



## 결론

위에 실험한 내용은

1. `벡터`기반인 피그마에서 png, jpg 로 저장해서 각각 인코딩

2. `벡터`기반인 피그마에서 svg로 저장하고  
`픽셀`기반인 포토샵에서 svg를 열어서 png로 저장  
`벡터`기반인 일러스트에서 svg를 열어서 png로 저장

3. `벡터기반`인 피그마와 일러스트에서 저장한 png와 jpg를 인코딩하고 다시 디코딩 할 때 파일 사이즈에서 차이가 없지만  
`픽셀기반`인 포토샵에서 저장한 png를 인코딩하고 다시 디코딩하면 파일사이즈가 조금 더 커진다는 것을 알 수 있었습니다.

(일러스트도 어떤 옵션으로 저장하는지에 따라 파일 사이즈에 차이가 있습니다.)

4. svg는 일러스트와 피그마에서 저장한 파일에 따라 코드 정리가 달라진다는 것을 볼 수 있습니다.

