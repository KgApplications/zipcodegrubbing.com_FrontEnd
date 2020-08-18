const styles = theme => ({
    root: {
        margin: '75px',
        width: '100%',
    },
    link: {
       color: 'inherit',
       textDecoration:  'none'
    },
    restaurant: {
        border: '1px solid black',
        width: '75%',
        height: '25vh',
        margin: 'auto',
        padding: '20px',
        marginBottom: '15px',
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'row',
    },
    imageContainer: {
        width: "25%",
        height: "100%",
        display: "inline-block",
        position: 'relative',
    },
    info: {
        width: '50%',
        display: 'inline-block',
        position: 'relative',
        top: '10px',
    },
    infoDescription: {
        width: '100%',
    },
    Img: {
        height: '100%',
        width: '100%'
    },
    contact: {
        width: '25%',
        display: 'inline-block',
        position: 'relative',
        top: '10px',
    }

})

export default styles