/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#FFFFFF',
            primarys: {
                default: '#ff9793',
                disabled: '#ffdedd',
                light: '#FFEFC4',
                lighter: '#FFF4D9',
                hover: '#ff6e6c',
            },
            grayscale: {
                black: '#202C38',
                border: '#e5e7eb',
                gray: '#676E72',
                light: '#919699',
                disabled: '#A6ABAD',
            },
            status: {
                error: '#FFEAE8',
                success: '#1BB045',
            },
        },
        screens: {
            xs: '500px',
            sm: '800px',
            md: '1024px',
            lg: '1280px',
            xl: '1366px',
            '2xl': '1600px',
        },
        extend: {
            fontSize: {
                '100px': '100px',
                '68px': '68px',
                '64px': '64px',
                '60px': '60px',
                '52px': '52px',
                '51px': '51px',
                '50px': '50px',
                '48px': '48px',
                '42px': '42px',
                '40px': '40px',
                '38px': '38px',
                '36px': '36px',
                '35px': '35px',
                '32px': '32px',
                '30px': '30px',
                '28px': '28px',
                '27px': '27px',
                '26px': '26px',
                '25px': '25px',
                '24px': '24px',
                '23px': '23px',
                '22px': '22px',
                '21px': '21px',
                '20px': '20px',
                '19px': '19px',
                '18px': '18px',
                '17px': '17px',
                '16px': '16px',
                '15px': '15px',
                '14px': '14px',
                '13px': '13px',
                '12px': '12px',
                '11px': '11px',
                '10px': '10px',
                '8px': '8px',
            },
            height: {
                '1059px': '1059px',
                '600px': '600px',
                '698px': '698px',
                '550px': '550px',
                '499px': '499px',
                '494px': '494px',
                '486px': '486px',
                '392px': '392px',
                '386px': '386px',
                '320px': '320px',
                '307px': '307px',
                '289px': '289px',
                '276px': '276px',
                '250px': '250px',
                '238px': '238px',
                '144px': '144px',
                '132px': '132px',
                '120px': '120px',
                '110px': '110px',
                '106px': '106px',
                '100px': '100px',
                '85px': '85px',
                '84px': '84px',
                '74px': '74px',
                '65px': '65px',
                '58px': '58px',
                '57px': '57px',
                '52px': '52px',
                '49px': '49px',
                '48px': '48px',
                '45px': '45px',
                '40px': '40px',
                '39px': '39px',
                '36px': '36px',
                '34px': '34px',
                '32px': '32px',
                '27px': '27px',
                '21px': '21px',
                '11px': '11px',
                '1px': '1px',
            },
            width: {
                '1680px': '1680px',
                '1644px': '1644px',
                '1512px': '1512px',
                '1465px': '1465px',
                '1352px': '1352px',
                '1272px': '1272px',
                '1270px': '1270px',
                '1188px': '1188px',
                '1110px': '1110px',
                '1132px': '1132px',
                '1130px': '1130px',
                '1108px': '1108px',
                '1045px': '1045px',
                '1014px': '1014px',
                '980px': '980px',
                '948px': '948px',
                '929px': '929px',
                '920px': '920px',
                '885px': '885px',
                '868px': '868px',
                '856px': '856px',
                '849px': '849px',
                '842px': '842px',
                '800px': '800px',
                '789px': '789px',
                '760px': '760px',
                '725px': '725px',
                '629px': '629px',
                '615px': '615px',
                '562px': '562px',
                '540px': '540px',
                '462px': '462px',
                '433px': '433px',
                '376px': '376px',
                '355px': '355px',
                '320px': '320px',
                '318px': '318px',
                '307px': '307px',
                '300px': '300px',
                '280px': '280px',
                '268px': '268px',
                '250px': '250px',
                '238px': '238px',
                '232px': '232px',
                '223px': '223px',
                '220px': '220px',
                '215px': '215px',
                '194px': '194px',
                '184px': '184px',
                '162px': '162px',
                '155px': '155px',
                '156px': '156px',
                '151px': '151px',
                '138px': '138px',
                '136px': '136px',
                '132px': '132px',
                '128px': '128px',
                '122px': '122px',
                '118px': '118px',
                '110px': '110px',
                '106px': '106px',
                '104px': '104px',
                '100px': '100px',
                '98px': '98px',
                '96px': '96px',
                '85px': '85px',
                '84px': '84px',
                '82px': '82px',
                '75px': '75px',
                '74px': '74px',
                '71px': '71px',
                '65px': '65px',
                '47px': '47px',
                '45px': '45px',
                '32px': '32px',
                '22px': '22px',
                '21px': '21px',
                '11px': '11px',
                '59%': '59%',
                '55%': '55%',
            },
            letterSpacing: {
                '-1px': '-1px',
                '-0.6px': '-0.6px',
                '-0.5px': '-0.5px',
                '-0.35px': '-0.35px',
                '-0.25px': '-0.25px',
                '-0.27px': '-0.27px',
                '-0.11px': '-0.11px',
            },
            lineHeight: {
                '90px': '90px',
                '84px': '84px',
                '70px': '70px',
                '56px': '56px',
                '48px': '48px',
                '36px': '36px',
                '31px': '31px',
                '29px': '29px',
                '26px': '26px',
                '24px': '24px',
                '23px': '23px',
                '22px': '22px',
                '20px': '20px',
                '18px': '18px',
                '17px': '17px',
                '16px': '16px',
                '14px': '14px',
                1.5: '1.5',
            },
            spacing: {
                '440px': '440px',
                '346px': '346px',
                '314px': '314px',
                '259px': '259px',
                '243px': '243px',
                '230px': '230px',
                '215px': '215px',
                '205px': '205px',
                '195px': '195px',
                '183px': '183px',
                '172px': '172px',
                '168px': '168px',
                '162px': '162px',
                '160px': '160px',
                '153px': '153px',
                '145px': '145px',
                '140px': '140px',
                '139px': '139px',
                '130px': '130px',
                '125px': '125px',
                '122px': '122px',
                '120px': '120px',
                '110px': '110px',
                '100px': '100px',
                '90px': '90px',
                '86px': '86px',
                '84px': '84px',
                '80px': '80px',
                '74px': '74px',
                '72px': '72px',
                '70px': '70px',
                '65px': '65px',
                '64px': '64px',
                '62px': '62px',
                '60px': '60px',
                '58px': '58px',
                '55px': '55px',
                '51px': '51px',
                '50px': '50px',
                '45px': '45px',
                '44px': '44px',
                '40px': '40px',
                '35px': '35px',
                '32px': '32px',
                '30px': '30px',
                '26px': '26px',
                '24px': '24px',
                '20px': '20px',
                '19px': '19px',
                '18px': '18px',
                '16px': '16px',
                '15px': '15px',
                '14px': '14px',
                '13px': '13px',
                '12px': '12px',
                '10px': '10px',
                '8px': '8px',
                '7px': '7px',
                '6px': '6px',
                '5px': '5px',
                '2px': '2px',
                '-2px': '-2px',
            },
            minHeight: {
                '600px': '600px',
                '54px': '54px',
                '72px': '72px',
                '35px': '35px',
            },
            minWidth: {
                '1920px': '1920px',
                '1820px': '1820px',
                '1680px': '1680px',
                '1465px': '1465px',
                '1352px': '1352px',
                '1272px': '1272px',
                '1270px': '1270px',
                '1188px': '1188px',
                '1110px': '1110px',
                '1132px': '1132px',
                '1130px': '1130px',
                '1014px': '1014px',
                '948px': '948px',
                '929px': '929px',
                '856px': '856px',
                '800px': '800px',
                '80px': '80px',
            },
            maxWidth: {
                '1920px': '1920px',
                '1680px': '1680px',
                '1465px': '1465px',
                '1352px': '1352px',
                '1272px': '1272px',
                '1270px': '1270px',
                '1188px': '1188px',
                '1110px': '1110px',
                '1132px': '1132px',
                '1130px': '1130px',
                '948px': '948px',
                '929px': '929px',
                '856px': '856px',
                '800px': '800px',
                '796px': '796px',
                '786px': '786px',
                '760px': '760px',
                '756px': '756px',
                '752px': '752px',
                '725px': '725px',
                '720px': '720px',
                '664px': '664px',
                '629px': '629px',
                '608px': '608px',
                '594px': '594px',
                '520px': '520px',
                '496px': '496px',
                '462px': '462px',
                '442px': '442px',
                '412px': '412px',
                '354px': '354px',
                '320px': '320px',
                '300px': '300px',
                '280px': '280px',
                '242px': '242px',
                '120px': '120px',
            },
            maxHeight: {
                '486px': '486px',
                '362px': '362px',
                '155px': '155px',
                '85px': '85px',
            },
            borderWidth: {},
            borderColor: {
                primarys: {
                    default: '#ff9793',
                    light: '#FFEFC4',
                    lighter: '#FFF4D9',
                    hover: '#faa9a8',
                },
                grayscale: {
                    black: '#202C38',
                    border: '#e5e7eb',
                    gray: '#676E72',
                    light: '#919699',
                    disabled: '#A6ABAD',
                },
            },
            fontFamily: {
                body: [
                    'Roboto',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            borderRadius: {},
            boxShadow: {
                drop: '0px 6px 10px #0000001A',
                footer: '0 1px 3px 5px #8b8d9d0d, 0 0 1px #41476c26',
            },
            translate: {
                '-50%': '-50%',
            },
        },
    },
    plugins: [],
};
