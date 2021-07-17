module.exports = () => {
    this.show = (connection, callback) => {
       let query = 'SELECT id, nome FROM  livros;'; 
       connection.query(query, callback);
    }     
    return this;
}