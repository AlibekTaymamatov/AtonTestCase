'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-aton documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-460ebb9b55e7a9c995551555ed47de5a391bbf3afdce1c01fd4df71caa025c7c7bc5834f52be1c0ac3a9b10f56c7985add174abeb6a9354ed321ffb91bf5bd46"' : 'data-target="#xs-components-links-module-AppModule-460ebb9b55e7a9c995551555ed47de5a391bbf3afdce1c01fd4df71caa025c7c7bc5834f52be1c0ac3a9b10f56c7985add174abeb6a9354ed321ffb91bf5bd46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-460ebb9b55e7a9c995551555ed47de5a391bbf3afdce1c01fd4df71caa025c7c7bc5834f52be1c0ac3a9b10f56c7985add174abeb6a9354ed321ffb91bf5bd46"' :
                                            'id="xs-components-links-module-AppModule-460ebb9b55e7a9c995551555ed47de5a391bbf3afdce1c01fd4df71caa025c7c7bc5834f52be1c0ac3a9b10f56c7985add174abeb6a9354ed321ffb91bf5bd46"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-516094a3f3bcc6c5c7199d5635648ff71fad1ca32041ac031b8b252df53f96b64824d344c49afff1012c03e07e42cfcbce71f4fc6465d0ddc2e77ef2ef0548fb"' : 'data-target="#xs-components-links-module-LoginModule-516094a3f3bcc6c5c7199d5635648ff71fad1ca32041ac031b8b252df53f96b64824d344c49afff1012c03e07e42cfcbce71f4fc6465d0ddc2e77ef2ef0548fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-516094a3f3bcc6c5c7199d5635648ff71fad1ca32041ac031b8b252df53f96b64824d344c49afff1012c03e07e42cfcbce71f4fc6465d0ddc2e77ef2ef0548fb"' :
                                            'id="xs-components-links-module-LoginModule-516094a3f3bcc6c5c7199d5635648ff71fad1ca32041ac031b8b252df53f96b64824d344c49afff1012c03e07e42cfcbce71f4fc6465d0ddc2e77ef2ef0548fb"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainPageModule.html" data-type="entity-link" >MainPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainPageModule-e02402b1e4242c1109b3fc1874fba9aeb569dc493497c93f9856548e9b33d5387b11cd91c2f1ec1d72d97a270c74e715f5183c67cc0b581d82af229ca5fc0238"' : 'data-target="#xs-components-links-module-MainPageModule-e02402b1e4242c1109b3fc1874fba9aeb569dc493497c93f9856548e9b33d5387b11cd91c2f1ec1d72d97a270c74e715f5183c67cc0b581d82af229ca5fc0238"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainPageModule-e02402b1e4242c1109b3fc1874fba9aeb569dc493497c93f9856548e9b33d5387b11cd91c2f1ec1d72d97a270c74e715f5183c67cc0b581d82af229ca5fc0238"' :
                                            'id="xs-components-links-module-MainPageModule-e02402b1e4242c1109b3fc1874fba9aeb569dc493497c93f9856548e9b33d5387b11cd91c2f1ec1d72d97a270c74e715f5183c67cc0b581d82af229ca5fc0238"' }>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainPageRoutingModule.html" data-type="entity-link" >MainPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link" >RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-ab654c4fefed3c879c724cd06f1af4810a52e756afd7653e5b7d869a20181352b6cd8b058325e95ee879798703d20cdae0d4aab9940d21277bd3d9ffbda71aa9"' : 'data-target="#xs-components-links-module-RegisterModule-ab654c4fefed3c879c724cd06f1af4810a52e756afd7653e5b7d869a20181352b6cd8b058325e95ee879798703d20cdae0d4aab9940d21277bd3d9ffbda71aa9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-ab654c4fefed3c879c724cd06f1af4810a52e756afd7653e5b7d869a20181352b6cd8b058325e95ee879798703d20cdae0d4aab9940d21277bd3d9ffbda71aa9"' :
                                            'id="xs-components-links-module-RegisterModule-ab654c4fefed3c879c724cd06f1af4810a52e756afd7653e5b7d869a20181352b6cd8b058325e95ee879798703d20cdae0d4aab9940d21277bd3d9ffbda71aa9"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link" >RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserInfoModule.html" data-type="entity-link" >UserInfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserInfoModule-ffa2218b78d02c57018ef6f343182abc91f2735c1014e8f2dfd37c22055f0c93140eba647dd674e55f130da672738127736c9637aa8efed430d06070ade4f48a"' : 'data-target="#xs-components-links-module-UserInfoModule-ffa2218b78d02c57018ef6f343182abc91f2735c1014e8f2dfd37c22055f0c93140eba647dd674e55f130da672738127736c9637aa8efed430d06070ade4f48a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserInfoModule-ffa2218b78d02c57018ef6f343182abc91f2735c1014e8f2dfd37c22055f0c93140eba647dd674e55f130da672738127736c9637aa8efed430d06070ade4f48a"' :
                                            'id="xs-components-links-module-UserInfoModule-ffa2218b78d02c57018ef6f343182abc91f2735c1014e8f2dfd37c22055f0c93140eba647dd674e55f130da672738127736c9637aa8efed430d06070ade4f48a"' }>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserInfoRoutingModule.html" data-type="entity-link" >UserInfoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserListModule.html" data-type="entity-link" >UserListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserListModule-a89b7214204b3ec581b73878768056ce41d1c87410ecd1e6e4504c2160c0abe8fdc5283e022ffef26191cc3f2921764be1b182f0f03862a549bbacd07baac917"' : 'data-target="#xs-components-links-module-UserListModule-a89b7214204b3ec581b73878768056ce41d1c87410ecd1e6e4504c2160c0abe8fdc5283e022ffef26191cc3f2921764be1b182f0f03862a549bbacd07baac917"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserListModule-a89b7214204b3ec581b73878768056ce41d1c87410ecd1e6e4504c2160c0abe8fdc5283e022ffef26191cc3f2921764be1b182f0f03862a549bbacd07baac917"' :
                                            'id="xs-components-links-module-UserListModule-a89b7214204b3ec581b73878768056ce41d1c87410ecd1e6e4504c2160c0abe8fdc5283e022ffef26191cc3f2921764be1b182f0f03862a549bbacd07baac917"' }>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserListRoutingModule.html" data-type="entity-link" >UserListRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthUser.html" data-type="entity-link" >AuthUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseAuthUser.html" data-type="entity-link" >ResponseAuthUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link" >UserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserList.html" data-type="entity-link" >UserList</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});