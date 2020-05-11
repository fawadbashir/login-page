import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette :{
        primary :{
            main : '#00b1e0'
        }
    },
    typography : {
        subtitle2 : {
            color : '#868686',
            // fontWeight : 400
        },
        h4 : {
            fontSize: '2rem'
        },
        caption : {
            color : '#868686',
        }
    }
})

export default theme