/*
 * PlayIt jQuery plugin Copyright 2011
 * Closure Compiler for PlayIt 
 */
var $ = { $:
{
    //PLAYIT
    fn: {
        playit: {
            globals:{},
            defaults: {
				accordionAnimate:{}, accordionAutoSelect:{}, accordionMinWidth:{}, accordionMaxWidth:{}, loadingIconSource:{}, iOSIframeAsObject:{}, iOSIframeAsObjectLink:{},
				dataSource:{}, 	dataSourceOptions: {xmlConfig:{}, cacheXml:{}}, 
				viewDefault:{}, loadingIconSource:{}, autoFill:{},
				toolbarTitle:{}, toolbarShowSearch:{}, toolbarSearchText:{}, toolbarSearchWidth:{},
				themeUseCDN:{}, themeName:{}, themeVersion:{}, themeUrl:{}, 
				audioAutoPlay:{}, audioInfoEnable:{}, audioInfoBoxHeight:{}, audioInfoBoxWidth:{}, audioInfoBoxModal:{}, audioInfoBoxResizable:{}, 
				imageAutoPlay:{}, imageSlidesInterval:{}, imageSlidesThumbCount:{}, imageInfoEnable:{}, imageDialogHeight:{}, imageDialogWidth:{},
				videoAutoPlay: {}, videoInfoEnable: {}, videoNavBarEnable: {}, videoDialogHeight: {}, videoDialogWidth: {} 
				},
				controlIds: {
					allContentId:{}, navigationId:{}, accordionId:{}, mainAreaId:{}, filesViewId:{}, tileSliderId:{}, audioInfoDialogId:{},
					toolBarId:{}, toolbarTitleId:{}, searchId:{}, searchBarId:{}, searchClearId:{}, switchBtnsId:{}, gridBtnId:{}, listBtnId:{}, tileBtnId:{},
					listBtnSetId:{},
					tileBtnSetId:{}, tileSortAlbumBtnId:{}, tileSortArtistBtnId:{}, tileSortTitleBtnId:{},
					audioPanelId:{}, audioTagId:{}, audioPlayId:{}, audioSliderId:{}, audioBackId:{}, audioForwardId:{}, audioThumbId:{}, audioTitleId:{}, audioAlbumId:{}, audioArtistId:{}, audioBtnSetId:{}, audioLoopId:{}, audioShuffleId:{}, audioVolumeId:{}, audioVolumeValId:{}, audioMuteId:{}, audioLogoId:{}, audioTimeId:{}, xxxaudioInfoId:{},
					linkIframeId:{},
					videoDialogId:{}, videoNavBarId:{}, videoDataId:{}, videoTagId:{}, videoIframeId:{}, videoNextId:{}, videoBackId:{}, videoInfoBtnId:{}, videoInfoBoxId:{},
					imageDialog:{}, imageActiveId:{}, imagePlayerId:{}, imageBackGroupId:{}, imageBackId:{}, imageNextGroupId:{}, imageNextId:{}, imagePlayId:{}, imageThumbsId:{}, imageThumbsSliderId: {}
            },
            //Public Methods
            init:{}, applyTheme:{}, getOptions:{}, get_controlIds:{}, get_options:{}, set_options:{}, get_currentView:{},
            // Audio
            audio: {
				_player: {paused:{}, ended:{}, seeking:{}, duration:{}, muted:{}, setMuted:{}, volume:{}, setVolume:{}, currentTime:{}, setCurrentTime:{}, src:{}, setSrc:{}, play:{}, pause:{},  load:{}, stop:{} },
                back:{}, forward:{}, shuffle:{}, play:{}, pause:{}, togglePlay:{}, toggleMute:{}, toggleShuffle:{}, toggleLoop:{}, setVolume:{}, setCurrentTime:{}, showInfo: {}
            },
            // Video
            video: {
				_player: {paused:{}, ended:{}, seeking:{}, duration:{}, muted:{}, setMuted:{}, volume:{}, setVolume:{}, currentTime:{}, setCurrentTime:{}, src:{}, setSrc:{}, play:{}, pause:{},  load:{}, stop:{} },
				play:{}, pause:{}, togglePlay:{}, toggleMute:{}
			},
            // Image
            image: {
                play:{}, pause:{}, togglePlay:{}, back:{}, forward:{}, backGroup:{}, forwardGroup: {}
            },
            // Thumb Bar
            ieThumbBar: {
                show:{}, hide: {}, 
				_build:{
					window: {
						external: { msIsSiteMode:{}, msSiteModeAddThumbBarButton:{},  msSiteModeAddButtonStyle:{}, msSiteModeShowThumbBar:{}, msSiteModeShowButtonStyle:{}}
					}
				}
            },
            // Entities
            view: {
                grid:{}, list:{}, tile: {}
            },
            fileType: {
                empty:{}, audio:{}, video:{}, image:{}, link: {}
            },
            section: {
                get_xmlNode:{}, get_id:{}, get_name:{}, get_isDefault:{}, get_categories:{},
                init:{}, addCategory: {}
            },
            audioAlbum: {
                get_id:{}, addTrack:{}, get_tracks:{},
                get_trackByIndexId:{}, init: {}
            },
            category: {
                get_xmlNode:{}, get_id:{}, get_fileType:{}, get_name:{}, get_src:{}, get_gridFields:{}, get_listFields:{}, get_sortColumn:{}, set_sortColumn:{}, get_sortDirection:{}, set_sortDirection:{}, get_defaultThumb:{}, get_defaultPoster:{}, get_mediaFiles:{}, get_audioAlbums:{}, get_isDefault:{}, get_scrollWindow:{},
                init:{}, add_mediaFile:{}, add_audioAlbum:{}, 
				playit_gridDef:{}, playit_listDef:{}, playit_tileDef:{}, 
				playit_sort_grid:{column:{}, direction:{}}, playit_sort_list:{column:{}, direction:{}}, playit_sort_tile:{column:{}, direction:{}}
            },
            field: {
                get_xmlNode:{}, get_id:{}, get_match:{}, get_display:{}, get_sortDisplay:{}, get_width:{},
                init: {}
            },
            audioFile: {
                get_album:{}, get_albumId:{}, get_artist:{}, get_catId:{}, get_defaultImage:{}, get_fileType:{}, get_id:{}, get_info:{}, get_infoEnable:{}, get_poster:{}, get_src:{}, get_thumb:{}, get_title:{}, get_track:{}, get_xmlNode:{},
                init: {}
            },
            imageFile: {
                get_catId:{}, get_fileType:{}, get_defaultImage:{}, get_height:{}, get_info:{}, get_navBarInfoEnable:{}, get_id:{}, get_poster:{}, get_src:{}, get_title:{}, get_thumb:{}, get_width:{}, get_xmlNode:{},
                init: {}
            },
            linkFile: {
                get_catId:{}, get_defaultImage:{}, get_features:{}, get_fileType:{}, get_id:{}, get_info:{},  get_poster:{}, get_src:{}, get_target:{}, get_title:{}, get_thumb:{}, get_xmlNode:{},
                init: {}
            },
            videoFile: {
                get_catId:{}, get_defaultImage:{}, get_fileType:{}, get_height:{}, get_player:{}, get_id:{}, get_info:{}, get_navBarInfoShow:{}, get_poster:{}, get_sources:{}, get_src:{}, get_title:{}, get_thumb:{}, get_width:{}, get_xmlNode:{},
                init: {}
            },
			xmlDataSource : {
				getSectionsAsync:{}, getCategoriesAsync:{}, getCategoryMediaFilesAsync:{}, getCategoryGridDefinition:{}, getCategoryListDefinition:{}, getCategoryTileDefinition: {}
			},
			webServiceDataSource : {
				getSectionsAsync:{}, getCategoriesAsync:{}, getCategoryMediaFilesAsync:{}, getCategoryGridDefinition:{}, getCategoryListDefinition:{}, getCategoryTileDefinition: {}
			},
			testDataSource: {
				getSectionsAsync:{}, getCategoriesAsync:{}, getCategoryMediaFilesAsync:{}, getCategoryGridDefinition:{}, getCategoryListDefinition:{}, getCategoryTileDefinition: {}
			},
			
			lang: {
				//STRING MATCHES
				Album:{},
				Artist:{},
				Back:{},
				Clear:{},
				Grid:{},
				List:{},
				Loop:{},
				Mute:{},
				Now_Showing_dots:{},
				Previous:{},
				Previous_Group:{},
				Previous_Image:{},
				Next:{},
				Next_Group:{},
				Next_Image:{},
				Play:{},
				Pause:{},
				Shuffle:{},
				Tile:{},
				Title:{},
				Sort_By:{},
				Unknown_Artist:{},
				Unkonwn_Album:{},
				Volume:{},
				
				//OBJECTS
				obj_audio_info:{},
				obj_image_info:{},
				obj_video_info:{},
				
				//MESSAGES
				msg_nosearch_results:{},
				msg_select_to_play:{},
				msg_no_playback:{},
				msg_no_views_enabled:{}
			}
			
        }
    }

}
}; 




