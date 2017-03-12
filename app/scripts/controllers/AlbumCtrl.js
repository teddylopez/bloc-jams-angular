(function() {
<<<<<<< HEAD
    function AlbumCtrl(Fixtures) {
        this.albumData = Fixtures.getAlbum();
=======
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
>>>>>>> angular-services-2
    };

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();