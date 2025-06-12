const trainees = [
  { id: 1, nome: "ANDREW", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/9F8504811AD24A47834FB527A2343665/1EjQ1UDOyUjQBNDN0MzQwkzQGRDRDFkN0IzN5MTR1ED.jpg?w=716&h=894" },
  { id: 2, nome: "AOSHI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/E1CC807F55764BA3938CC9AEECB06E3F/EVkM0IER1YUMyAzN0QERxkTN3gDNDZkQ3czQClzNEVE.jpg?w=716&h=894" },
  { id: 3, nome: "ARCTIC", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/C00FADA1CF7549A190BD82C5204E9380/EJUNCFjR0UTQCNTQ0IUR2EUQGNTRxEjQ3UUQzUjN2EE.jpg?w=716&h=894" },
  { id: 4, nome: "BAEK JAE HYEON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/65284E46B0C04ADCA610DF21EE71FC26/GlTOGBTMFVEN4YUM0EDRxEUQ5EEO1UUN2EUOFRzMFJD.jpg?w=716&h=894" },
  { id: 5, nome: "BANG JUN HYUK", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/FA404787D1E3480C8BB88F6EA2EBBE98/GNDR0UEO5ATQFJDN0YEOChTNDNEO5EDNDZUN1czN0AD.jpg?w=716&h=894" },
  { id: 6, nome: "BANG SU HWAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/F51631942D82435C9F0E1429C10AFB9F/0YjNzMjR0gjMBZkM0QjRwgDNDhjQ0UUQ4MDOxM0MGND.jpg?w=716&h=894" },
  { id: 7, nome: "CHO MYEONG SU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/0860EE7CDF7B425AB123AB43F469E351/1ADN3cTOycTRzkTN0U0QDFkRykzNwYEMwYDRyMkMxAD.jpg?w=716&h=894" },
  { id: 8, nome: "CHOI JUN SEOK", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1B47272A8B584B2FBB2B9969D479F236/BRUQEZTNEBDNBJkM0IzMzIERwMEN4cTODNUR5MTQ4IE.jpg?w=716&h=894" },
  { id: 9, nome: "CHRIS", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/424760D0DE8B40508B362995010A2B0D/DRzM5EjN3gjQCBTN0ATODF0Q0UEOBJzM3QDM1YEO0QD.jpg?w=716&h=894" },
  { id: 10, nome: "CHUEI LI YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/A2E35B02EBC74A6E81568D30A87FDD30/5MDMyMDMyEzQBhDR0Y0M0EUQ2MkQ4QUO3cTMEJEMDRD.jpg?w=716&h=894" },
  { id: 11, nome: "CHUNG SANG HYEON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/6A833FDADC7A4C6890F68E5D0BB26B7A/GREM2YURBREMxYUM0UUMwIUM1YUNGJER3gjM4IDOCZD.png?w=716&h=894" },
  { id: 12, nome: "HAM HYUN SEO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/2818EFB3759D464E9DE8864D734F79CE/5YkNGRDRBJTNBZzN0Y0Q1gTQFZUQ0YTOGFTMCF0QwcD.jpg?w=716&h=894" },
  { id: 13, nome: "HAN HARRY JUNE", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/EACC5E7B376E40A4942E4A9A42096D71/yUTNCN0QBFUM3YzM0IEO1I0N1gDNxE0NzYzQyM0NwkD.jpg?w=716&h=894" },
  { id: 14, nome: "HEO JI O", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3CEAFFCCB409421BB34409B2359C33E8/yQTR4IEO1gTQ0QkM0MUOyIUOElTO0MkM5UzN2cDNFJE.jpg?w=716&h=894" },
  { id: 15, nome: "HSU CHING YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/D0F24426D73B4AE58736BDD434ABAD09/3UzM2MkQxkzNwQzM0EDM4kDOEJkRER0MFdzM2U0NyYE.jpg?w=716&h=894" },
  { id: 16, nome: "HWANG SUN WOO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/FDD2699DA67548989CB139BDA1E38F69/4YjQ4MjQ4IjRERTO0QjN1kDNBZDRxIUOyYDOwYENBRD.jpg?w=716&h=894" },
  { id: 17, nome: "JANG HAN EUM", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/6559F2ABAD3E4BFB8875A0A6F175FEB3/wADM3UjM2Y0NwETM0gjNyIERDdzNCZjQyMDOEJEOEJD.jpg?w=716&h=894" },
  { id: 18, nome: "JANG TAE YOON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/5D803410F6D3417892C0AFB99BE2CFD1/DJzN4IjQERkQxYkR0I0M2kDRDRzMzITO2kTMzAzM3gD.jpg?w=716&h=894" },
  { id: 19, nome: "JO GYE HYEON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/A0D965339A464845BD862F5F30050B0B/xIDOCFTNEhDMGBDN0MUO1IUQ0QTOxYTO4U0QDNERCRD.jpg?w=716&h=894" },
  { id: 20, nome: "JUN LEE JEONG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3E84ECFE3C9E425099E1669C483CE4CB/FhzM1U0Q5cDRxIDR0MDM4kDO3MDMxUTOyMDM4QUNwIE.jpg?w=716&h=894" },
  { id: 21, nome: "JUNG HYUN JUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/E4A4A3EE340148D7977F15B0934D6F96/zcTR0YjREZjNwUDN0EEMzgDNERDR4ITQ3MENxkjNwAD.jpg?w=716&h=894" },
  { id: 22, nome: "JUSTIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/660068F4D0504DF38A816DB216154A57/0QkNFlzMGJTOzADN0ATM0gTMwIkQ3UkM3EURFVTODdD.jpg?w=716&h=894" },
  { id: 23, nome: "KANG WOO JIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3AF3476DDB514A76B66447C62450A0D5/wMTRxITNBdDM2cDO0ATMEF0QFRTR4EUOERTNCBDREVD.jpg?w=716&h=894"},
  { id: 24, nome: "KENSHIRO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/AB0ACD324C044A28B97C12AD6745F8C6/EVkN2kTM5UUO0QjQ0Y0Q5IERyQkNCNTQGVTM5QzMGdD.jpg?w=716&h=894" },
  { id: 25, nome: "KIM DANIEL", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/09ECC4F4DC16411F8A1CBB11711FA35B/0UUMEljQ0EURGF0N0QzQ1EEMDNjNDJ0N4UTREdTOGBD.jpg?w=716&h=894" },
  { id: 26, nome: "KIM DONG HYUN A", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/DD543AF6DDD241DFBEF0CFCD3B263D8B/GlTM4kDM1IkM0MTN0I0M5EERyQ0QwATQBVUNDBjQ0YD.jpg?w=716&h=894" },
  { id: 27, nome: "KIM DONG HYUN B", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/EB3D0B6EF4A04EE3B93BF1A379A3F3E7/yMENxcTM4EjMDZjM0U0Q5IkR5UzMEBDNzQDNGVTNxYD.jpg?w=716&h=894" },
  { id: 28, nome: "KIM DONG YUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/6B9ED488B6FE419FB356A30A14D60D7F/DREOBZUNwUEO1QDM0cTQ1EEOyUkQEFkMxEDRFRDNGVE.jpg?w=716&h=894" },
  { id: 29, nome: "KIM GEON WOO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/83B4054B7D734F6F9E1C1870395A9855/wMTQ3cjQzQER2U0Q0YENwgTR0gzQzYjMwQ0QxczQ0MD.jpg?w=716&h=894" },
  { id: 30, nome: "KIM HYEON SEO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/1BAF55ED67CF481BB2BA45E94E4B47D2/yIUQFFkNBlDM3kDM0I0N3kTRBNTQDRDNCFUNyIzMBJD.jpg?w=716&h=894" },
  { id: 31, nome: "KIM HYUN BIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/496D2C412436496D92C22BE560775285/FZkQ0IkM3EkM0UUQ0IEO3kjMClzQ0cjNBFDO3kzQygD.jpg?w=716&h=894" },
  { id: 32, nome: "KIM IN HU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/E2A6F95DC852429384FD80E44ECF174D/ElDR0cDRGlTN5Y0M0IkQxEENCNUOyQDN5MTRFNUMyAD.jpg?w=716&h=894" },
  { id: 33, nome: "KIM JAE HYUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3ED3B5FA260D4D7B906FEC46CB348C53/zkjN2YURyEUOBZEN0AjQEljMBRURFdTQ0ITN5QkNwgD.jpg?w=716&h=894" },
  { id: 34, nome: "KIM JUN MIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/027D5A08000447B4A26FCE3D2DA66470/2cTNEdzNEZDNzADO0M0NGFEMEJjQ0AzMCFkR4M0QyYE.jpg?w=716&h=894" },
  { id: 35, nome: "KIM JUN SEO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/1769FCE27BAC41B7899BF75E39D3106E/FRTN5EUQ5IDRBVTM0QzQzIEMyETOwYkN5U0MwADRBlD.png?w=716&h=894" },
  { id: 36, nome: "KIM MIN JUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/15FF5F3545F84881A46021134036F6B7/yIUN1QDRCRUQ0cTM0gTQwkzN3IEMGFTOGZUM4ETOzQD.jpg?w=716&h=894" },
  { id: 37, nome: "KIM SI HWAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3E592743CC85434EAFCB076270CE83BC/4kTOykTOFVDOyEzQ0Q0QBlDRFZEOwUjM3kTNxUkN3ME.jpg?w=716&h=894" },
  { id: 38, nome: "KIM TAE JO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/EC94DEF23AC2437A932CD58C582675AD/DFUM3M0NyMjRFFjM0MERFlDR5QzNwUERwcDMxITR3YD.jpg?w=716&h=894" },
  { id: 39, nome: "KIM WON BIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/49973086158D46FC93B20A7B38C13489/DljQycjQBRTOGVjN0UkRwIkMGljR2EjQCFDMyMDRGJE.jpg?w=716&h=894" },
  { id: 40, nome: "KIM YOUNG JUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/41BE6685898A40AAB1B1A853A1D63FF6/2gDRBRTQFVUNDREN0YjQDFkR3IDMwcDMzEDNBFkNDJE.jpg?w=716&h=894" },
  { id: 41, nome: "KWON GYU HYUNG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/0463B38F86C84F6C866F91EF4017A473/1YkNxEkQCVjRERDM0MTN0kTNBVjN4gjNBhTR0MTMCJE.jpg?w=716&h=894" },
  { id: 42, nome: "LEE DONG HEON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1A91E75A85D945FDAD3F84622DDE13A3/zYTMDZURyIUR0cTO0MTNwkTREVjMxATMDJUNzIUR2MD.jpg?w=716&h=894" },
  { id: 43, nome: "LEE HYEOP", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/98CFDBDB485641FB86D5EB672C10FBFE/EV0QDJkQFJjR3QUO0ETMGhDR1MUO2QUQ1kTQCdDRwME.png?w=716&h=894" },
  { id: 44, nome: "LEE LEO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/AEAEEC9E7BB84918AFAABFDA25D41DA4/BR0MGhDR1gTN2kjQ0QDOFhTN1AjN5kDMFdDM0YDNDdD.jpg?w=716&h=894" },
  { id: 45, nome: "LEE SANG WON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/FEDEADB592D24A399DC90BDABBA9BA08/2YDRxITR2gDM2IjN0YjNChDOyAjM0EDMDVERykjQyUD.png?w=716&h=894" },
  { id: 46, nome: "LEE SEUNG BAEK", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/553CC2BBB1A443CEBF2863A4D4D1409F/1QENDdTNGJzM4UEM0ATQFlTMFVDR0YTRwQ0Q1QUNwMD.jpg?w=716&h=894" },
  { id: 47, nome: "LEE WON WOO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/DAD2F10DDA564DEDAEA8B26340D1F755/zEDNzYjRBVkQDFjM0QDNyEUO4EkQDNjMxYURDlDM3MD.jpg?w=716&h=894" },
  { id: 48, nome: "LEE YOON CHAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/32CBE05BCF3E4766BA0E8839C4CD7DA6/wkTN2ADOyIzMxIjQ0ITM1kzQEJ0MzQUQCFjNGRUQEFD.jpg?w=716&h=894" },
  { id: 49, nome: "MASATO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/6A2C698A94054E07A6AC7232444C5BF9/wUDR4UDM0ATM5YTN0EkQFJ0MERjQCdDMzkTNDF0M2cD.jpg?w=716&h=894" },
  { id: 50, nome: "MOON SUHN BIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/CA78FDD166604FF2B88A25741FCB96EF/5MTRxYURGVkRCFzQ0ITOGhDN0kDNwYUMyQDO1UEM4ED.jpg?w=716&h=894" },
  { id: 51, nome: "MUHN WON JUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/41D1A1163252491C96D3023A84B9BF1D/GhzNClzN4IjNGZkN0ETOzEkMxADNzYEMwADN5UjQFRD.jpg?w=716&h=894" },
  { id: 52, nome: "NA YUN SEO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/C5310EE586934B54B7DFC13533E88114/BdTN3ATRwMTQFV0M0ETQ3IUMwIDRyAjMFZER5MDR4YD.jpg?w=716&h=894" },
  { id: 53, nome: "NOH HUI JUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/04C0351D63C84288B0ECB7C63CF3FE58/wQDMzMEO0IkNFVDM0MEOygzNxMkM3ADMFZkRxIzNFZD.jpg?w=716&h=894" },
  { id: 54, nome: "OH JUN HO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1D7E9433BCD64199B37BE9F2873B9493/2IjQ0QjM0YUM1QTN0EkN0EENDNTOwQTQFJkR0Y0MCdD.jpg?w=716&h=894" },
  { id: 55, nome: "PARK DONG GYU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/CB100AA97343424FAB3A6983E9F86CCD/FVENClzQwUEMygDN0IzQ4IURwYzQFZkQzIjR0IUNzQE.jpg?w=716&h=894" },
  { id: 56, nome: "PARK JI MIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/8962B7F925E64EB2A129FD2AFD6C4328/FVzNwYUNyETQ1IkN0UUNGlDO5MzMEFkQClzN0YUQ0MD.jpg?w=716&h=894" },
  { id: 57, nome: "PARK JUN IL", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/7B757876468F4416AAB760073080AFEF/wEkN1EzM2YEO2kTM0I0Q4kzQBFkNFJTR3EURzYUM1QD.jpg?w=716&h=894" },
  { id: 58, nome: "PARK JUN SEONG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/AEBA57DEF3C749308CA7EC8FE797F57C/DdTNBNzN2QUNzIER0YEMCFkQxYDMEFUM5EEN0YUNxID.jpg?w=716&h=894" },
  { id: 59, nome: "PARK NU RI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/B36540261D44498FBED6B1DAEBCF819A/GljN5MENxEDM0Q0N0IUN5EkMDVUMyIzNBZUO3kzNzYE.jpg?w=716&h=894" },
  { id: 60, nome: "PUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/4EC4A1C20702448AA6C71744FCAD7C9D/GFDO0UkRBJjNwIkR0YjQygjN5YzMzkDOwIUMFVTR2kD.jpg?w=716&h=894" },
  { id: 61, nome: "REEONN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/B55CCDA5331E4B5797491D144394FCD6/BhDOyATM5UTOxMDN0MEO2E0NEBjR1gTRxMEOEVTQCFE.jpg?w=716&h=894" },
  { id: 62, nome: "RENSHO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/19ACDE63F3084C9683E60D0EB02A4435/yMDM3YEN4YkNGJjQ0YkRwkTRwEzQwY0QzMUREZTQwgD.jpg?w=716&h=894" },
  { id: 63, nome: "RYAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/ACE6EBFBC69D461692246BB07EA6A1A9/2IkQyQzMDZDOzEUM0UTNxEUQ2IERxM0QFBTNBN0NzED.jpg?w=716&h=894" },
  { id: 64, nome: "SEO WON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/AD3C8020AD94472494E8A6C4D4791C42/DJUOEFzNwkTMDZTQ0gzMDlTODZUNwUEN1QjM2YUMxkD.png?w=716&h=894" },
  { id: 65, nome: "SHIN JAE HA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/157A052D9CFF4502BBD9B2C4C958FFAF/1gjR1EDR1MzQCJDN0UjR4EEMEVTO3UEN0gjN0QkN4ID.jpg?w=716&h=894" },
  { id: 66, nome: "SHO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/68A15D6FFCF049E590155FC3509BE802/3U0M0UUOERkRxIDO0UEMwgzN2EEN2QENCJkM5kDR2kD.jpg?w=716&h=894" },
  { id: 67, nome: "SHOYA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/72BFB1DF84FB4BC5BD65E76B77B31463/4YERFBDREJDMzMzN0QEO0gDNwMTQBZEM0ITQGZUMyQD.jpg?w=716&h=894" },
  { id: 68, nome: "SONG MIN JAE", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/03B72CA661614B0C8ED37FF1FF6FE5B9/DlDNBZUO1YkNFZjQ0IkNFF0NzMTOEFUQwgTRwATRBVD.jpg?w=716&h=894" },
  { id: 69, nome: "TAICHI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3315351B1B54406A950B37E861CE5960/zEDRwIUMzMTM4YkM0ADM2kDNGVUOGNzMDZ0M4QER5UD.jpg?w=716&h=894" },
  { id: 70, nome: "TATSUKI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/15C73409FDF24C7B94A03FD5EC91CB23/yQ0N4IUNEJDNwYEO0kDRDJEOwYDOzEDMzQjQwUTMERD.jpg?w=716&h=894" },
  { id: 71, nome: "THANATORN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/C6630C1BE0994BB38E03E68619480F93/xcDMFBjQBFUQzcDO0MjQEhTOwEzQDJ0MBNzQEJkNxkD.jpg?w=716&h=894" },
  { id: 72, nome: "TOMOYA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/DD302B994FBC4B6887E6DD568D6F723C/DNzNyQTR3QTM5ITN0gTNzkzMCFEOzcTQyUEN2UkQwUD.jpg?w=716&h=894" },
  { id: 73, nome: "YANG DA WIT", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/166024EA5BC14006985E24E1EA122EA5/FFTQ2UENzYUMFBzN0kjQ0kzQzU0M4EjMxADOBNzMFFE.jpg?w=716&h=894" },
  { id: 74, nome: "YANG HEUI CHAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/339D7E16D2864A17BCDDBA15A2742200/EFjQBRTNFVERxYDO0IDMChjRCR0MCBDOyQkM3EUQzIE.jpg?w=716&h=894" },
  { id: 75, nome: "YEOM YE CHAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/506473BA87434E1094C7E6E9134E8EF0/DZkM4Y0N1YUQxkTR0gTM1gTN4MkM3kjN2ETOBhzMyUE.jpg?w=716&h=894" },
  { id: 76, nome: "YOO KANG MIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/0A0576121FE14B5B9A9F079479D66D92/BREN1cDNGBTOFdDN0UDNBJkQ0UTMwkDOEVjQxQDN1ED.png?w=716&h=894" },
  { id: 77, nome: "YOO KI WON", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/4B8A06D1C0734E0C9DCE619DC6AD2CE4/wkDO0U0MwUENwIjM0cDNxIUQEljMBhjQ3gjNFFUR4gD.jpg?w=716&h=894" },
  { id: 78, nome: "YOON MIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/71762B77AB2A4ACD87187AA5BADC6F32/GFjMCFjNyQkQBNTM0IjMBhDRFZUM3ITNzETMEFUQ0MD.jpg?w=716&h=894" },
  { id: 79, nome: "YUMEKI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/39EC406202F749FE95A2CFFD1730F848/CdDRzQTM3EjQzgjQ0UkR1EkQ3QEOGRUQ2IzNDZkMChD.jpg?w=716&h=894" },
  { id: 80, nome: "YUSEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/8966376AEA8649BE9C071A3683BC5B42/ygTOyUjQxIUO3IEO0QjQBlTMxQTQGlDMxYURCNkN0ME.jpg?w=716&h=894" },
  { id: 81, nome: "BIAN SHI YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/17523DCC77784D61A8E1D53A33891B4B/GZTQ0ITRzEkNBBTM0YjQGFENxkDOCRkM5MkMEBjM2YD.jpg?w=716&h=894" },
  { id: 82, nome: "CAI JIN XIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6362CCCE8CE342029782237529950EBE/3YTQGhzQEVERBlDO0UTMEJkM4cDNFNUMBBzN2E0N5kD.jpg?w=716&h=894" },
  { id: 83, nome: "CHEN BO WEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6A8E81044216475D9B55DE84A075F3FC/3YUOFVkQBJzM5YjR0UkQxgTM4kDR1AzQ4kTNyUkR5YE.jpg?w=716&h=894" },
  { id: 84, nome: "CHEN CHAO YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/8F46E13784014F2098B3F07B2B532B96/FBTNChDN3QDRERER0MjR4IURwEzQwkTO1YDO1QEOCBD.jpg?w=716&h=894" },
  { id: 85, nome: "CHEN JIN XIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E7F4E1D7AD0B4283B03213BE0DA4A860/xkjRwMDR4UjNyUDM0UkREJ0QxYTQChDMFZ0QEZDO0QE.jpg?w=716&h=894" },
  { id: 86, nome: "CHEN KAI WEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/5D0BBD47382F4122B6CC0661E2C4E873/3czMwgTR0kjMwAzQ0YzNyEURzUENwEEO3IzQ3YDN2QD.jpg?w=716&h=894" },
  { id: 87, nome: "CHEN LI CHI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/356A1B1F500548A5BAB92D95382D6534/2cDRDZEO4AzQ5cTM0EkMzgjQChTQGZUR3gTMxgjRwgD.jpg?w=716&h=894" },
  { id: 88, nome: "CHEN ZI SHUO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A73BF094AD394CDEB2E098C98042C12D/ERjR4QEMDNTM4UDO0Q0NGFkNzIEOwUjR0MzN2gTQ4QD.jpg?w=716&h=894" },
  { id: 89, nome: "CHRISEN YANG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/26433E4BE21B417E9D10AAA9A1A9FB75/3MjM2EUO4I0Q0IzM0EEOxEEO2cjMwIkMyI0Q2MzMGND.jpg?w=716&h=894" },
  { id: 90, nome: "DANG HONG HAI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9CE5E5F08D3F4182A2BC2764D0FBD3EE/BFDNFlTQ2IUM4EUO0E0QEJkQ4EENykjMyMzNDhjM2UE.jpg?w=716&h=894" },
  { id: 91, nome: "DONG JING KUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/FDD74A9D87FD4D368303B2D99EB74E86/CZzM4I0MFRTMERkN0QjM3IERxEkQxIEN3MDOxgTQwgD.jpg?w=716&h=894"},
  { id: 92, nome: "DONG ZI QI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2144E9E93F854260BE98FAEB2F38DE54/zcTN2IzQBdzMykjM0ATQ0EUOBVERxQERCdzQxEkMFhD.jpg?w=716&h=894" },
  { id: 93, nome: "FAN ZHE YI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/DCDCE7EBD7164E4AB1992F0265CF10E3/1YTNwMDOwMTOEZTN0ETO1EUR0YER4MDNBVUNzQjQCNE.jpg?w=716&h=894" },
  { id: 95, nome: "GUO ZHEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/ECC0EB6EDD02471EB31EDA97BFD2F607/1MUMzQUMBRERCFzN0kDMGlDMGlzNDZUQEJkMFZ0Q5YD.jpg?w=716&h=894" },
  { id: 96, nome: "HAN RUI ZE", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2E698FDF2E7149899B8272FBCB07AC47/1EzQ5YUNyUTM1QzN0QUO3IEN3ETNwkDRFN0NyYUQycD.jpg?w=716&h=894" },
  { id: 97, nome: "HE JUN JIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/BC28E4D2DB3548ED8964F3FA90DFC926/wYkM0MUNwIDR4UkN0U0NzIUQFJTR2QEN5EDRFZUN2ED.jpg?w=716&h=894" },
  { id: 98, nome: "HE XIN LONG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/182101E733AE4BBF82BD2965E7F8F110/GhDNFhDN0MzM5EDO0U0MzkzQ3YTM5QzM0IkQGVEMElD.jpg?w=716&h=894" },
  { id: 99, nome: "HE ZHONG XING", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E8F59961107E49209F7B3CC29D64AF70/4EDO1MjRDRDNBVzM0UkNGJEMEZUQFVTNBdTMBJUN4MD.jpg?w=716&h=894" },
  { id: 100, nome: "HONG ZHI HAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2CADAC7DD6DD4BC3916579B3503411BF/4QERFZjNwMTN2MTM0YEOBFENxgDRCVDNDFUMFZEN5IE.jpg?w=716&h=894" },
  { id: 101, nome: "HONG ZIH HAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B231BE571F4E4BDB93E5ACF7BC2F27D3/BRDOwQEM4gDRyUTM0gTOBhTR4IkQ0Y0M4YTNzcjQDFE.jpg?w=716&h=894" },
  { id: 102, nome: "HU HAN WEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1AEEAA2DFEF7404CB83AABB659282BDC/5AjQ4MTQ4EjQ0kjN0UUN4IkNCRjNCNDRDFjQ1kDO4AD.jpg?w=716&h=894" },
  { id: 103, nome: "HUANG HSIN YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/0E92AE65A9604C86B229ACC3CE6881DD/0IzNFhTR4EzNBFER0gjNChTMFFTQGhjR2ETMCVUQ0AD.jpg?w=716&h=894" },
  { id: 104, nome: "JIA HAN YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6497EEB23333468B8A0D970CE18EAE38/yMkN3MDR4YjNCBjN0cjNxgDOyMzNCJjRDdTNzADR4EE.jpg?w=716&h=894" },
    { id: 105, nome: "JIANG FAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A62E07D3F0BC4B2F9ABBC490CBF7EB5B/4UjQ1gjN3QzM4QzQ0ETNyIUOGZjN2EkRClzQBZkM2IE.jpg?w=716&h=894" },
    { id: 106, nome: "KO MING CHIEH", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B6DC1D04E1C1487E87EC1E637D662588/1UDN4cjRxMkM3QzN0MTRygDRCJkMERkRwQDN3QDOxUD.jpg?w=716&h=894" },
    { id: 107, nome: "KRYSTIAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/AF2F9792DC914CF1BF72FC4D312C4F2B/wMTO2Y0MBRjMER0Q0AjREFkQCNjNzgzMBdDN4M0NyIE.jpg?w=716&h=894" },
    { id: 108, nome: "LI XIAO DI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9CB071C7C3A2419FB92EEB462098732B/FlTN5IkQ4EDRFR0N0gzNEFkM5MDNygDMBVUO3YTNCNE.jpg?w=716&h=894" },
    { id: 109, nome: "LI ZHENG EN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9F3752D48DF8419791736680346C0477/zUjN1UUNEZ0M2gTQ0ATMzkDMGdjQEJTO0M0MBVkNBlD.jpg?w=716&h=894" },
    { id: 110, nome: "LI ZI HAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6580B87E50BD4329923EC32A2DED9473/wU0QBJkNzgjQFRDN0YTR4kzNFFTMENERDdzQ2M0MCJE.jpg?w=716&h=894" },
    { id: 111, nome: "LIM JACK", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3FB09B1682A8406B80A977FE785D02F5/xEUM0MzQDVENCNzM0MjQ0EkRwAjR3QEO1EUQzIEN2IE.jpg?w=716&h=894" },
    { id: 112, nome: "LIN CHING EN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CA44FC49917440FD8EB2025EEC3D78F1/CljRCBTRFJUO1EEM0MEOClzQ2cDM0YURBVjRyEjQ1ED.jpg?w=716&h=894" },
    { id: 113, nome: "LIN XIN RUI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/41885D7C3770499A9C85381B508D8195/1EkM0EkMxMUNEJTN0ADMzgTM0Q0MGFjN0QzN3QzNyQD.jpg?w=716&h=894" },
    { id: 114, nome: "LONG GUO HAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B22442E916CF4E7DA6236420F7D5A65E/0gzMzQjN5IUR1czM0E0M0EENBNzQFRTNCRUO5kzMGZD.jpg?w=716&h=894" },
    { id: 115, nome: "MA TAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3774069C21014771ABE13ABD9ED79CC2/ygjN3UDNxkjNDZTO0QERyEkQxYDNxMUOxMTQ1gzMFND.jpg?w=716&h=894" },
    { id: 116, nome: "NGAN CHAU YUET", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B06E26AC48874937A55734E1FDB9C368/2Y0MGRUOwEkN1IUM0IERGFUN3Q0QEJUO2EDRCVEO2ID.jpg?w=716&h=894" },
    { id: 117, nome: "NIAN BO HENG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9B22B7374A754F6A9CE652D964AA69FE/DVDRzETNDFUMEV0Q0UEOFJUO4EEMwMkMyQURFNzM2kD.jpg?w=716&h=894" },
    { id: 118, nome: "PENG JIN YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E5FD6C1600AE41078DD7E9643EAE3884/1EjR2QDOFVENyAjQ0cjN4E0MEZTM5QDMxIDRGdzQEFD.jpg?w=716&h=894" },
    { id: 119, nome: "PHOENIX", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B775D05D441249608106029219972E12/0YEO5gTRFR0MzkDM0MTMEJkM5QEOxMTRykDR4UkQCRE.jpg?w=716&h=894" },
    { id: 120, nome: "QI LIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CF41BF5F0395449A947577E189D48884/BhDOxEjRzUTNEFTN0QUN3kjNDVjM3EkMzYkQ3EENGRE.jpg?w=716&h=894" },
    { id: 121, nome: "QIAO GUAN ZHEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/42C17AE9F72F4E6AA5F1BB23C90F8FB3/0AjMyAzNBBTOFdDN0UTO5gTMChTR0UTNDRkQGRTQxQE.jpg?w=716&h=894" },
    { id: 122, nome: "SANG LIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/12BC14D0BD74456285CDDC4E2037A80A/1YDMwIEM0YTQykzM0QDRFFERxAzNENjQDBjRGdDM5UD.jpg?w=716&h=894" },
    { id: 123, nome: "SEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/FDA5E20EC53F4437A01B18297F8BD802/DREMDNzMEF0NzAjM0YTRykjNyADMwgDODFkMxkDMEND.jpg?w=716&h=894" },
    { id: 124, nome: "SUN HAN LIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3FB452BC98D044078337620683631D15/4ETQDhDNxUTO0I0M0MjQwkTN1gTMygjMBFTRDRDN3UD.jpg?w=716&h=894" },
    { id: 125, nome: "SUN HENG YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/997EF2833FEE4808A5418FD25ABF9158/DZjR1MjNGZ0MGBzQ0Y0MyEUM3YENDBzM3ETRxE0N0kD.jpg?w=716&h=894" },
    { id: 126, nome: "SUN JIA YANG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1A571B1605A04B0997F7A04FCD973F2D/EVzMxE0Q5YDOwUER0QzQ5IUNFRDR1MUQxYDODZTRzYE.jpg?w=716&h=894" },
    { id: 127, nome: "TAIGA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1899C9E6B7144D17BC7B1C6E723AC0E9/CRUOFVDMDNkQyITN0MURzIEMCNDRFJjQFNkQCRjRFNE.jpg?w=716&h=894" },
    { id: 128, nome: "TENG CHIA CHUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/171E3E60B92642059AC75B0EA58252EB/wcTOBF0Q1U0N3MER0kDNEJ0M0UEO5cjRwUjR3gTQFVD.jpg?w=716&h=894" },
    { id: 129, nome: "WANG CAN RUO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/EF6627E2362A4219942833082A0CED9F/GNEN0MTNCRjMGhDM0cDMzkjRFZTQxM0NFlDNwMTMGZD.jpg?w=716&h=894" },
    { id: 130, nome: "WANG DONG YI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/422D13042BB440BDBC86B23A9876BD87/CVEMzAjM4cTQBRUR0UEOwkjM4gTQBljRxMTQGBjRGFD.jpg?w=716&h=894" },
    { id: 131, nome: "WANG SHENG LIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/DD8A7B0D9E5244CE9FC879D37701BF13/0M0NEBTRzMDM3EDO0cTM1IUQ5kjRDdTNEJzN3QDM4YE.jpg?w=716&h=894" },
    { id: 132, nome: "WANG ZHONG ZHI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/D511809062D9408EB903617AAF7A4BB3/yYkQ3cDNxcDOzIEO0AjN5IEMBlTMCJUMwEUR0UjQBNE.jpg?w=716&h=894" },
    { id: 133, nome: "WENG WEI DONG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/280615F2DBF64EF6B7177A7C298DF169/xYTQ3IUR4YjQyEzM0UkMBJENGNEM5ITRzYDN3YkRxkD.jpg?w=716&h=894" },
    { id: 134, nome: "WONG SIK HEI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2B7A8A00AA72462A93FFE1E8C8EEDE8D/EVUOGFER5IjN4EEM0kDOBhTNCZzMzQUNwIEN0IkNEFE.jpg?w=716&h=894" },
    { id: 135, nome: "XIE BING HUA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/327891BBDB3B40C782507E106C612DA8/xMEMFJjMFNkMzEEM0Y0QDhjNBR0QzEkQxATOwMTNFVE.jpg?w=716&h=894" },
    { id: 136, nome: "XIE JIA HUI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/933AA1F7CB124AFEAD21D8B2458D8CFE/yQUQxEkQ5gTOGFUM0QTMDJEMxEkQwUEMCdTRzEkQ2UD.jpg?w=716&h=894" },
    { id: 137, nome: "XIE YU XIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A7EBC34251EB4CBFB3B4B69F2363D5B9/ERTOCZ0M3QzQENkR0MkQGF0MCJ0QGNzM4IDR5MDMycD.jpg?w=716&h=894" },
    { id: 138, nome: "XUAN HAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/52BD25C1BECA4453A4D52077268F932B/4YDO1YUQyQTNDVUR0AzN0gjNGRjRDFDM4QDOzYUQwAD.jpg?w=716&h=894" },
    { id: 139, nome: "XUE SU REN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/93324B335C794DE5BBEC6E9B9515C76E/yMTN4UkRxQDOEFEM0YTQ4kTOwQDR0YEO3AjNzADRFJE.jpg?w=716&h=894" },
    { id: 140, nome: "YANG JIA PENG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/543D5B1D9988411381911153623DCFB8/2gTOBhDRyQUNCF0Q0IUM2IUMwIjMGRjM2UjR3QTNxQD.jpg?w=716&h=894" },
    { id: 141, nome: "YEUNG YUK HIM", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/0312D470A65743DD9BA5DE5EA8BB9D19/yIkNEhzMwgzQFR0N0cjMwgDNwUkNxU0N5QTMDBDN1EE.jpg?w=716&h=894" },
    { id: 142, nome: "YI CHEN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/92A70E9EB1FD4DD0A95063A5D9EB9131/DVUODZzQxgjN1MzN0AjM5EUNDFzN0MkM4MzNEVkRzcD.png?w=716&h=894" },
    { id: 143, nome: "YUAN WEI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/723DFA5E523D493CB1375098310CAC04/BJUQCZ0NwIDR5kTM0AzN4IUMGljR3IERzkjM4IjR3gD.jpg?w=716&h=894" },
    { id: 144, nome: "ZENG SHANG XUAN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E404D05DC2AE46EA88A097432D023515/ykDOyYUNCZEN3E0Q0UzNElzQ1Q0NFVUM4QTO0U0QDZD.jpg?w=716&h=894" },
    { id: 145, nome: "ZHANG JIA HAO", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A2FC14D14E9942CB96270BB5175902B2/1IkN2EzQ0MjRyYDR0EUM1kDODVEMGBjNEBDO3MzQ4EE.jpg?w=716&h=894" },
    { id: 146, nome: "ZHANG SHI YI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E1A8FAF5F89742CF900FC12EF9E274AC/wMkN3YTMzQDRENTQ0MkQDF0QzATOCJEOGNEO3QTQzEE.jpg?w=716&h=894" },
    { id: 147, nome: "ZHANG SHUN YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/11716D5A8BDD464FB5A574B99818072F/wYkR4E0MwMDOBNUR0QTN5gTN5EUM1UkN1QDM0AjNFZD.jpg?w=716&h=894" },
    { id: 148, nome: "ZHANG YI HUA", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2AB7928B0BBC4FFD9B6320A5AA4D7918/FNDODF0NFZTMxkzQ0YDOzIkN2IzMFNENGZDM0kzNzUD.jpg?w=716&h=894" },
    { id: 149, nome: "ZHANG YU XI", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2726DA18DCEF47B7B0DA4F37EBDCA496/BRzQ2UkNEVDN3IkR0IjR3IUOzcTNENDR5IjM3QzMyYD.jpg?w=716&h=894" },
    { id: 150, nome: "ZHAO GUANG XU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/12/79CEDEDD67F442C981EF728C5E6211E4/FZkNzY0QxMjM1MDM0YERClTO4QzNBVjN2QjN2ITR0IE.png?w=716&h=894" },
    { id: 151, nome: "ZHENG KUN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B76921AB75B544CF8D4B7F21BEDCCE0D/BJTNBRENGBjMGN0Q0ADOFlTN2IjNDZzMEREMwMERGFE.jpg?w=716&h=894" },
    { id: 152, nome: "ZHENG REN YU", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/C02D1CED88374CE49CEBABA91F933F64/xgDOzEEN0IDN3QjQ0UkMzEUQCVkQxcjNzADM1cTREVE.jpg?w=716&h=894" },
    { id: 153, nome: "ZHOU AN XIN", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/66EFCAF3350C45DDAB13B5BB86D661AD/GZjR0cTR4YkQ3kTO0YDO3I0MBNDOEN0N5EkRzEUOxYD.jpg?w=716&h=894" },
    { id: 154, nome: "ZHOU YAN HE", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6848E34F7602485785F93900ABEC1C01/yUTNFVkRERURwAjM0ITNBFEO5ADMEJTOElTN1UEM2cD.jpg?w=716&h=894" },
  { id: 155, nome: "ZHOU ZHENG", imagem: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CB5919D7F4D240E481FB507E27055C7A/DZERFZkMFVjM1cDR0EjM3EUOwMTR3QzMCNUNFBDNxUD.jpg?w=716&h=894" },
];

const rankingContainer = document.getElementById("ranking");
const traineesContainer = document.getElementById("trainees");

// Criar os itens de trainee
function renderTrainees(lista) {
  traineesContainer.innerHTML = ""; // Limpa a lista atual
  lista.forEach(pessoa => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${pessoa.imagem}" alt="${pessoa.nome}" onclick="addToRanking(${pessoa.id})">
      <p>${pessoa.nome}</p>
    `;
    traineesContainer.appendChild(div);
  });
}

renderTrainees(trainees);

document.getElementById("filtro-nome").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const filtrados = trainees.filter(p => p.nome.toLowerCase().includes(texto));
  renderTrainees(filtrados);
});

const ranking = [];
const rankingLimit = 8;

function updateRanking() {
  // Limpa as três linhas
  document.querySelector(".row-1").innerHTML = "";
  document.querySelector(".row-2").innerHTML = "";
  document.querySelector(".row-3").innerHTML = "";

  const rows = [
    document.querySelector(".row-1"),
    document.querySelector(".row-2"),
    document.querySelector(".row-3"),
  ];

  for (let i = 0; i < 8; i++) {
    const pessoaId = ranking[i];
    const pessoa = trainees.find(p => p.id === pessoaId);

    const slot = document.createElement("div");
    slot.className = "rank-slot";

    const corEstrela = i < 3 ? "gold" : "silver";

    const estrela = `
      <div class="estrela-wrapper">
        <svg viewBox="0 0 24 24" class="estrela-icon" fill="${corEstrela}">
          <path d="M12 .587l3.668 7.571L24 9.748l-6 5.848L19.336 24 12 19.771 4.664 24 6 15.596 0 9.748l8.332-1.59z"/>
        </svg>
        <span class="estrela-num">${i + 1}</span>
      </div>
    `;

    if (pessoa) {
      slot.innerHTML = `
        ${estrela}
        <img src="${pessoa.imagem}" alt="${pessoa.nome}" onclick="removeFromRanking(${pessoa.id})">
        <p>${pessoa.nome}</p>
      `;
    } else {
      slot.innerHTML = `
        ${estrela}
        <img src="https://via.placeholder.com/100?text=Slot">
      `;
    }

    if (i === 0) rows[0].appendChild(slot);
    else if (i >= 1 && i <= 3) rows[1].appendChild(slot);
    else if (i >= 4 && i <= 7) rows[2].appendChild(slot);
  }
}

function addToRanking(id) {
  if (ranking.includes(id) || ranking.length >= rankingLimit) return;
  ranking.push(id);
  updateRanking();
}

function removeFromRanking(id) {
  const index = ranking.indexOf(id);
  if (index !== -1) {
    ranking.splice(index, 1);
    updateRanking();
  }
}

updateRanking();
