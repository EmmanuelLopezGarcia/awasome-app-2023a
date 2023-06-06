// GET /
export const http_error = (req, res) => {
    
    res.render('not_found', {
        docTitle: '404',
    });
}