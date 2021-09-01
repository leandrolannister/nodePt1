module.exports = () => {
    return (connection) => {
        this.lista = (callback) => {
            connection.query('select * from livros', callback);
        }
        return this;
    }
}