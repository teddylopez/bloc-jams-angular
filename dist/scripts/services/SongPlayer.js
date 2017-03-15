(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
/**
* @desc Current album object retrieved from fixtures
* @type {Object}
*/
        var currentAlbum = Fixtures.getAlbum();
        
 /**
 * @desc Buzz object audio file
 * @type {Object}
 */
        var currentBuzzObject = null;
        
/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
        
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            SongPlayer.currentSong = song;
        };
        
        var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
        };
        
/**
* @desc Active song object from list of songs
* @type {Object}
*/

        SongPlayer.currentSong = null;
        
/**
* @function playSong
* @desc Starts a song 
* @param {Object} song
*/
        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
/**
* @function stopSong
* @desc Stop a song
* @param {Object} song
*/
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        };
 
/**
* @function used in ng-click
* @desc ng-click function that switches between play and pause depending on whether the song is playing or not
*/
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if(SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
        
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
/**
* @function 
* @desc Plays previous song 
* @param {Object} song
*/
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

/**
* @function 
* @desc Plays next song 
* @param {Object} song
*/        
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            lastSongIndex = currentAlbum.songs.length - 1;
            
            if (currentSongIndex > lastSongIndex) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
 
    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();