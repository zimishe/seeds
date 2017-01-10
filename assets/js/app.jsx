var React = require('react'),
    ReactDOM = require('react-dom');

var CARDS = [
    {
        id: 1,
        image: 'assets/img/card1.jpg',
        discount: '',
        special: '',
        name: 'Маленька пачка',
        priceOld: 9999,
        priceNew: 5000
    }, {
        id: 2,
        image: 'assets/img/card2.jpg',
        discount: 15,
        special: 'Хіт продаж',
        name: 'Середня пачка',
        priceOld: 9119,
        priceNew: 6000
    }, {
        id: 3,
        image: 'assets/img/card3.jpg',
        discount: 1,
        special: 'Хіт продаж',
        name: 'Велика пачка',
        priceOld: 100,
        priceNew: 60
    },
    {
        id: 3,
        image: 'assets/img/card1.jpg',
        discount: '',
        special: '',
        name: 'Мега пачка',
        priceOld: 666,
        priceNew: 500
    }, {
        id: 4,
        image: 'assets/img/card2.jpg',
        discount: 11,
        special: 'Хіт',
        name: 'Міні пачка',
        priceOld: 2200,
        priceNew: 1500
    }, {
        id: 5,
        image: 'assets/img/card3.jpg',
        discount: 1,
        special: 'розпродаж',
        name: 'Екстра пачка',
        priceOld: 10,
        priceNew: 9
    }, {
        id: 6,
        image: 'assets/img/card1.jpg',
        discount: '',
        special: '',
        name: 'Маленька пачка',
        priceOld: 9999,
        priceNew: 5000
    }, {
        id: 7,
        image: 'assets/img/card2.jpg',
        discount: 15,
        special: 'Хіт продаж',
        name: 'Середня пачка',
        priceOld: 9119,
        priceNew: 6000
    }, {
        id: 8,
        image: 'assets/img/card3.jpg',
        discount: 1,
        special: 'Хіт продаж',
        name: 'Велика пачка',
        priceOld: 100,
        priceNew: 60
    },
    {
        id: 9,
        image: 'assets/img/card1.jpg',
        discount: '',
        special: '',
        name: 'Мега пачка',
        priceOld: 666,
        priceNew: 500
    }, {
        id: 10,
        image: 'assets/img/card2.jpg',
        discount: 11,
        special: 'Хіт',
        name: 'Міні пачка',
        priceOld: 2200,
        priceNew: 1500
    }, {
        id: 11,
        image: 'assets/img/card3.jpg',
        discount: 1,
        special: 'розпродаж',
        name: 'Екстра пачка',
        priceOld: 10,
        priceNew: 9
    }, {
        id: 12,
        image: 'assets/img/card3.jpg',
        discount: 1,
        special: 'новинка',
        name: 'пачка',
        priceOld: 228,
        priceNew: 10
    }
];

var currentCounted = 0,
    currentAddedToCart = [];

var SearchForm = React.createClass({
    render: function() {
        return (
            <form className="search">
                <input type="search" placeholder="Search.." className="search__field" onChange={this.props.handleSearch} />
                <button className="search__submit">
                    <img src="assets/img/icon-search.png" alt="Search" />
                </button>
            </form>
        )
    }
});

var CardItem = React.createClass({
    
    render: function() {
        var photoStyle = {
            backgroundImage: "url('assets/img/card1.jpg')"
        };
        
        const discount = this.props.discount,
              special = this.props.special;
        
        function checkDiscount() {
            if (discount !== '') {
                return (
                <div className="cards__item__discount">
                    <p>{discount}%</p>
                </div>
                    
                )
            }   else {
                return false
            }
        } 
        
        function checkSpecial() {
            if (special !== '') {
                return (
                <div className="cards__item__mark">
                    <p>{special}</p>
                </div>
                    
                )
            }   else {
                return false
            }
        }

        return (
            <div className="cards__item">
                <div className="cards__item__photo" style = {photoStyle}>
                    {checkDiscount()}
                    {checkSpecial()}
                </div>
                <div className="cards__item__info">
                    <div className="cards__item__name">
                        <a>{this.props.name}</a>
                    </div>
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox" />
                        додати до порівняння
                    </label>
                    <div className="cards__item__bottom">
                        <div className="cards__item__price">
                            <div className="cards__item__price--old">
                                <p><strong>{this.props.priceOld}</strong></p>
                            </div>
                            <div className="cards__item__price--new">
                                <p><strong>{this.props.priceNew}</strong> грн</p>
                            </div>
                        </div>
                        <button className="add-to-cart" onClick={this.props.handleClick}>
                            Купить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});

var AddedItem = React.createClass({

    render: function() {

        return (
            <div className="cards__item">
                <div className="cards__item__info">
                    <div className="cards__item__name">
                        <a>{this.props.name}</a>
                    </div>
                    <div className="cards__item__bottom">
                        <div className="cards__item__price">
                            <div className="cards__item__price--new">
                                <p><strong>{this.props.priceNew}</strong> грн</p>
                            </div>
                        </div>
                        <button className="remove-from-cart" onClick={this.props.handleClick}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});


var SeedShop = React.createClass({
    getInitialState: function() {
        return {
            cardInfo: CARDS,
            totalCounted: currentCounted,
            addedTotal: CARDS
        };
    },

    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();

        var cardInfo = CARDS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;  // return element if function returns true
        });

        this.setState({
            cardInfo: cardInfo
        });
    },

    addToCart: function(e) {
        var target = e.target;

        // console.log('e', e);

        function setCounter() {

            if (!target.classList.contains('disabled')) {
                target.classList.add('disabled');
                target.setAttribute('disabled', 'disabled');

                currentCounted += 1;
            }
        }

        setCounter();

        // currentAddedToCart.push(
        //     {
        //         id: 1,
        //         key: 1,
        //         name: 'zalupa'
        //     }
        // );

        this.setState({
            totalCounted: currentCounted,
            // addedTotal: currentAddedToCart
        });


        function cartTop(key) {
            console.log('k', key);
        }

        // cartTop(key);

        // addedTotal: currentAddedToCart
    },
    
    render: function() {
        var addFunc = this.addToCart;

        return (
            <div className="shop">
                <div className="header">
                    <HeaderLogo/>
                    <div className="cart">
                        <a href="#" data-counter={this.state.totalCounted}>
                            <img src="assets/img/cart.png" alt="Cart"/>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <SideMenu />
                    <div className="cards">
                        <div className="cards__controls">
                            <SearchForm handleSearch={this.handleSearch} />
                            <Switcher />
                        </div>

                        <div className="cards__items__list">
                            
                            {
                                this.state.cardInfo.map(function(el) {
                                    return <CardItem
                                        key={el.id}
                                        name={el.name}
                                        discount={el.discount}
                                        special={el.special}
                                        priceOld={el.priceOld}
                                        priceNew={el.priceNew}
                                        handleClick={addFunc}
                                    />;
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )  
    } 
});

var HeaderLogo = React.createClass({
    render: function() {
        return (
            <div className="header__logo">
                <img src="assets/img/logo.jpg" width="60" height="60" />
            </div>
        );
    }
});

var SideMenu = React.createClass({
    render: function() {
        return (
            <nav className="menu">
                <ul>
                    <SideMenuItem />
                    <SideMenuItem />
                    <SideMenuItem />
                    <SideMenuItem />
                </ul>
            </nav>
        )
    }
});

var SideMenuItem = React.createClass({
   render: function() {
       return (
           <li className="menu__item">
               <a href="#">Menu Item</a>
           </li>
       )
   } 
});

var Switcher = React.createClass({
    
    toggleList: function() {
       var switcher = document.querySelector('.switcher'),
           container = document.querySelector('.cards__items__list'),
           list;
       
       if ((typeof switcher != 'undefined') && (typeof switcher != 'undefined')) {
           list = document.querySelector('.switcher__list');
           
           container.classList.add('list');
       }
    },
    
    toggleGrid: function() {
       var switcher = document.querySelector('.switcher'),
           container = document.querySelector('.cards__items__list'),
           grid;
       
       if ((typeof switcher != 'undefined') && (typeof switcher != 'undefined')) {
           grid = document.querySelector('.switcher__grid');

           container.classList.remove('list');
       }
   },
    
   render: function() {
       return (
           <ul className="switcher">
               <li>
                   <a className="switcher__list" onClick={this.toggleList}>
                       <img src="assets/img/list.png" width="30" height="30" alt="List View" />
                   </a>
               </li>
               <li>
                   <a className="switcher__grid" onClick={this.toggleGrid}>
                       <img src="assets/img/grid.png" width="30" height="30" alt="Grid View" />
                   </a>
               </li>
           </ul>
       )
   } 
});

//render all

ReactDOM.render(
    <SeedShop />,
    document.querySelector('.wrapper')
);
