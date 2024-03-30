const urlsheet = '10QlnSfvsow7DFPNK-QU9wSPP0SHMdJMmO4GWrbqY3NQ'
// content banner
fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'Banner',
    })
    .then((rows) => {
        banner(rows[0]['Background'], rows[0]['Logo1'], rows[0]['Logo2'], rows[0]['Title1'], rows[0]['Title2'], rows[0]['Title3'],
            rows[0]['Title4'], rows[0]['Title5'], rows[0]['imageauthor1'], rows[0]['imageauthor2'], rows[0]['Bannerinfo1_1'],
            rows[0]['Bannerinfo1_2'], rows[0]['Bannerinfo2_1'], rows[0]['Bannerinfo2_2'], rows[0]['Bannerinfo3_1'], rows[0]['Bannerinfo3_2']
            , rows[0]['Registerbutton'], rows[0]['gh'])
    });

function banner(banner_Background, banner_Logo1, banner_Logo2, banner_Title1, banner_Title2, banner_Title3,
    banner_Title4, banner_Title5, banner_imageauthor1, banner_imageauthor2, banner_Bannerinfo1_1, banner_Bannerinfo1_2, banner_Bannerinfo2_1,
    banner_Bannerinfo2_2, banner_Bannerinfo3_1, banner_Bannerinfo3_2, banner_Registerbutton, gh) {
    document.querySelector('#banner_Background').setAttribute('style', `background-image:url(${banner_Background})`)
    document.querySelector('#banner_Logo1').setAttribute('style', `background-image:url(${banner_Logo1})`)
    document.querySelector('#banner_Logo2').setAttribute('style', `background-image:url(${banner_Logo2})`)
    document.querySelector('#banner_Title1').innerText = banner_Title1
    document.querySelector('#banner_Title2').innerText = banner_Title2
    document.querySelector('#banner_Title3').innerText = banner_Title3
    document.querySelector('#banner_Title4').innerText = banner_Title4
    document.querySelector('#banner_Title5').innerText = banner_Title5
    document.querySelector('#banner_imageauthor1').setAttribute('style', `background-image:url(${banner_imageauthor1})`)
    document.querySelector('#banner_imageauthor2').setAttribute('style', `background-image:url(${banner_imageauthor2})`)
    document.querySelector('#banner_Bannerinfo1_1').innerText = banner_Bannerinfo1_1
    document.querySelector('#banner_Bannerinfo1_2').innerText = banner_Bannerinfo1_2
    document.querySelector('#banner_Bannerinfo2_1').innerText = banner_Bannerinfo2_1
    document.querySelector('#banner_Bannerinfo2_2').innerText = banner_Bannerinfo2_2
    document.querySelector('#banner_Bannerinfo3_1').innerText = banner_Bannerinfo3_1
    document.querySelector('#banner_Bannerinfo3_2').innerText = banner_Bannerinfo3_2
    document.querySelector('#banner_Registerbutton').innerText = banner_Registerbutton
    document.querySelector('#banner_gh').innerText = gh
}

// content body1 
fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'body1',
    })
    .then((rows) => {
        document.querySelector('#body1_Title1').innerHTML = rows[0]['Title1'] + `<span style="color: rgb(242, 67, 13)">${rows[0]['Title2']}</span>`;
        document.querySelector('#body1_list1').innerText = rows[0]['list1']
        document.querySelector('#body1_list2').innerText = rows[0]['list2']
        document.querySelector('#body1_list3').innerText = rows[0]['list3']
        document.querySelector('#body1_headline1').innerText = rows[0]['headline1']
        document.querySelector('#body1_headline2').innerText = rows[0]['headline2']
    });

fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'body2',
    })
    .then((rows) => {
        document.querySelector('#body2_Title1').innerHTML = rows[0]['Title1']
        document.querySelector('#body2_imageheading').setAttribute('style', `background-image:url(${rows[0]['imageheading']})`)
        document.querySelector('#body2_list1').innerHTML = rows[0]['list1']
        document.querySelector('#body2_list2').innerHTML = rows[0]['list2']
        document.querySelector('#body2_list3').innerHTML = rows[0]['list3']
        document.querySelector('#body2_list4').innerHTML = rows[0]['list4']
    });
fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'Timeline',
    })
    .then((rows) => {
        document.querySelector('#time_line_Title1').innerHTML = rows[0]['Title1']
        document.querySelector('#time_line_Title3').innerHTML = rows[0]['Title3']
        document.querySelector('#time_line_listtitle1').innerHTML = rows[0]['Tlisttitle1']
        document.querySelector('#time_line_listtitle2').innerHTML = rows[0]['Tlisttitle2']
        document.querySelector('#time_line_listtitle3').innerHTML = rows[0]['Tlisttitle3']
        document.querySelector('#time_line_listtitle4').innerHTML = rows[0]['Tlisttitle4']
        document.querySelector('#time_line_listtitle5').innerHTML = rows[0]['Tlisttitle5']
        document.querySelector('#time_line_list1').innerHTML = rows[0]['list1']
        document.querySelector('#time_line_list2').innerHTML = rows[0]['list2']
        document.querySelector('#time_line_list3').innerHTML = rows[0]['list3']
        document.querySelector('#time_line_list4').innerHTML = rows[0]['list4']
        document.querySelector('#time_line_list5').innerHTML = rows[0]['list5']
    });

fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'body4',
    })
    .then((rows) => {
        document.querySelector('#body4_Title1').innerHTML = rows[0]['Title1']
        document.querySelector('#body4_name1').innerHTML = rows[0]['name1']
        document.querySelector('#body4_name2').innerHTML = rows[0]['name2']
        document.querySelector('#body4_role1').innerHTML = rows[0]['role1']
        document.querySelector('#body4_role2').innerHTML = rows[0]['role2']
        document.querySelector('#body4_list1_1').innerHTML = rows[0]['list1_1']
        document.querySelector('#body4_list1_2').innerHTML = rows[0]['list1_2']
        document.querySelector('#body4_list1_3').innerHTML = rows[0]['list1_3']
        document.querySelector('#body4_list2_1').innerHTML = rows[0]['list2_1']
        document.querySelector('#body4_list2_2').innerHTML = rows[0]['list2_2']
        document.querySelector('#body4_list2_3').innerHTML = rows[0]['list2_3']
        document.querySelector('#body_imagebackground1').setAttribute('style', `background-image:url(${rows[0]['avatar1']})`)
        document.querySelector('#body_image').setAttribute('style', `background-image:url(${rows[0]['avatar2']})`)
    });

fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'body5',
    })
    .then((rows) => {
        document.querySelector('#body5_Title1').innerHTML = rows[0]['Title1']
        document.querySelector('#body5_Heading2').innerHTML = rows[0]['Heading2']
    })

fetchSheet
    .fetch({
        gSheetId: urlsheet,
        wSheetName: 'body5',
    })
    .then((rows) => {
        document.querySelector('#body5_Title1').innerHTML = rows[0]['Title1']
        document.querySelector('#body5_Heading2').innerHTML = rows[0]['Heading2']
    })
