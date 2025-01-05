require.config({
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.2.2.min',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min',
        'inspire-tree': '../node_modules/inspire-tree/dist/inspire-tree',
        'inspire-tree-dom': '../dist/inspire-tree-dom'
    }
});
require.onError = function(err) {
    // eslint-disable-next-line no-console
    console.error('Error de RequireJS:', err);
};
