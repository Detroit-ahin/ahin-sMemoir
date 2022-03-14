import { makeStyles } from "@material-ui/core";
import notFoundimg from '../Assets/Images/notFound.png';

const mainstyle = makeStyles({
    para:{
    color:'#FF6347',
    marginTop:80,
    textAlign:'center'
        },
    
        
})

// Invalid Routing Page .

const NotFound = () => {
    const classes = mainstyle();
    return (
        // <h1 className={classes.para}>Page NoT Found.</h1>
        <img src={notFoundimg} style={{width:'100%'}} />
    )
}

export default NotFound;