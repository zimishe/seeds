(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var CARDS = [{
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
}, {
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
}, {
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
}];

var currentCounted = 0;

var SearchForm = React.createClass({
    displayName: 'SearchForm',

    render: function render() {
        return React.createElement('form', { className: 'search' }, React.createElement('input', { type: 'search', placeholder: 'Search..', className: 'search__field', onChange: this.props.handleSearch }), React.createElement('button', { className: 'search__submit' }, React.createElement('img', { src: 'assets/img/icon-search.png', alt: 'Search' })));
    }
});

var CardItem = React.createClass({
    displayName: 'CardItem',

    render: function render() {
        var photoStyle = {
            backgroundImage: "url('assets/img/card1.jpg')"
        };

        var discount = this.props.discount,
            special = this.props.special;

        function checkDiscount() {
            if (discount !== '') {
                return React.createElement('div', { className: 'cards__item__discount' }, React.createElement('p', null, discount, '%'));
            } else {
                return false;
            }
        }

        function checkSpecial() {
            if (special !== '') {
                return React.createElement('div', { className: 'cards__item__mark' }, React.createElement('p', null, special));
            } else {
                return false;
            }
        }

        return React.createElement('div', { className: 'cards__item' }, React.createElement('div', { className: 'cards__item__photo', style: photoStyle }, checkDiscount(), checkSpecial()), React.createElement('div', { className: 'cards__item__info' }, React.createElement('div', { className: 'cards__item__name' }, React.createElement('a', null, this.props.name)), React.createElement('label', null, React.createElement('input', { type: 'checkbox' }), React.createElement('span', { className: 'checkbox' }), '\u0434\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F'), React.createElement('div', { className: 'cards__item__bottom' }, React.createElement('div', { className: 'cards__item__price' }, React.createElement('div', { className: 'cards__item__price--old' }, React.createElement('p', null, React.createElement('strong', null, this.props.priceOld))), React.createElement('div', { className: 'cards__item__price--new' }, React.createElement('p', null, React.createElement('strong', null, this.props.priceNew), ' \u0433\u0440\u043D'))), React.createElement('button', { className: 'add-to-cart', onClick: this.props.handleClick }, '\u041A\u0443\u043F\u0438\u0442\u044C'))));
    }
});

var SeedShop = React.createClass({
    displayName: 'SeedShop',

    getInitialState: function getInitialState() {
        return {
            cardInfo: CARDS,
            totalCounted: currentCounted
        };
    },

    handleSearch: function handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();

        var cardInfo = CARDS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1; // return element if function returns true
        });

        this.setState({
            cardInfo: cardInfo
        });
    },

    addToCart: function addToCart(e) {
        var target = e.target;

        if (!target.classList.contains('disabled')) {
            target.classList.add('disabled');
            target.setAttribute('disabled', 'disabled');

            currentCounted += 1;

            this.setState({
                totalCounted: currentCounted
            });
        }
    },

    render: function render() {
        var addFunc = this.addToCart;

        return React.createElement('div', { className: 'shop' }, React.createElement('div', { className: 'header' }, React.createElement(HeaderLogo, null), React.createElement('div', { className: 'cart' }, React.createElement('a', { href: '#', 'data-counter': this.state.totalCounted }, React.createElement('img', { src: 'assets/img/cart.png', alt: 'Cart' })))), React.createElement('div', { className: 'content' }, React.createElement(SideMenu, null), React.createElement('div', { className: 'cards' }, React.createElement('div', { className: 'cards__controls' }, React.createElement(SearchForm, { handleSearch: this.handleSearch }), React.createElement(Switcher, null)), React.createElement('div', { className: 'cards__items__list' }, this.state.cardInfo.map(function (el) {
            return React.createElement(CardItem, {
                key: el.id,
                name: el.name,
                discount: el.discount,
                special: el.special,
                priceOld: el.priceOld,
                priceNew: el.priceNew,
                handleClick: addFunc
            });
        })))));
    }
});

var HeaderLogo = React.createClass({
    displayName: 'HeaderLogo',

    render: function render() {
        return React.createElement('div', { className: 'header__logo' }, React.createElement('img', { src: 'assets/img/logo.jpg', width: '60', height: '60' }));
    }
});

var SideMenu = React.createClass({
    displayName: 'SideMenu',

    render: function render() {
        return React.createElement('nav', { className: 'menu' }, React.createElement('ul', null, React.createElement(SideMenuItem, null), React.createElement(SideMenuItem, null), React.createElement(SideMenuItem, null), React.createElement(SideMenuItem, null)));
    }
});

var SideMenuItem = React.createClass({
    displayName: 'SideMenuItem',

    render: function render() {
        return React.createElement('li', { className: 'menu__item' }, React.createElement('a', { href: '#' }, 'Menu Item'));
    }
});

var Switcher = React.createClass({
    displayName: 'Switcher',

    toggleList: function toggleList() {
        var switcher = document.querySelector('.switcher'),
            container = document.querySelector('.cards__items__list'),
            list;

        if (typeof switcher != 'undefined' && typeof switcher != 'undefined') {
            list = document.querySelector('.switcher__list');

            container.classList.add('list');
            container.classList.remove('grid');
        }
    },

    toggleGrid: function toggleGrid() {
        var switcher = document.querySelector('.switcher'),
            container = document.querySelector('.cards__items__list'),
            grid;

        if (typeof switcher != 'undefined' && typeof switcher != 'undefined') {
            grid = document.querySelector('.switcher__grid');

            container.classList.add('grid');
            container.classList.remove('list');
        }
    },

    render: function render() {
        return React.createElement('ul', { className: 'switcher' }, React.createElement('li', null, React.createElement('a', { className: 'switcher__list', onClick: this.toggleList }, React.createElement('img', { src: 'assets/img/list.png', width: '30', height: '30', alt: 'List View' }))), React.createElement('li', null, React.createElement('a', { className: 'switcher__grid', onClick: this.toggleGrid }, React.createElement('img', { src: 'assets/img/grid.png', width: '30', height: '30', alt: 'Grid View' }))));
    }
});

//render all

ReactDOM.render(React.createElement(SeedShop, null), document.querySelector('.wrapper'));

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsUUFBWixBQUFZLEFBQVE7SUFDaEIsV0FBVyxRQURmLEFBQ2UsQUFBUTs7QUFFdkIsSUFBSTtRQUNBLEFBQ1EsQUFDSjtXQUZKLEFBRVcsQUFDUDtjQUhKLEFBR2MsQUFDVjthQUpKLEFBSWEsQUFDVDtVQUxKLEFBS1UsQUFDTjtjQU5KLEFBTWMsQUFDVjtjQVJJLEFBQ1IsQUFDSSxBQU1VOztRQUNYLEFBQ0ssQUFDSjtXQUZELEFBRVEsQUFDUDtjQUhELEFBR1csQUFDVjthQUpELEFBSVUsQUFDVDtVQUxELEFBS08sQUFDTjtjQU5ELEFBTVcsQUFDVjtjQWhCSSxBQVNMLEFBQ0MsQUFNVTs7UUFDWCxBQUNLLEFBQ0o7V0FGRCxBQUVRLEFBQ1A7Y0FIRCxBQUdXLEFBQ1Y7YUFKRCxBQUlVLEFBQ1Q7VUFMRCxBQUtPLEFBQ047Y0FORCxBQU1XLEFBQ1Y7Y0F4QkksQUFpQkwsQUFDQyxBQU1VOztRQUVkLEFBQ1EsQUFDSjtXQUZKLEFBRVcsQUFDUDtjQUhKLEFBR2MsQUFDVjthQUpKLEFBSWEsQUFDVDtVQUxKLEFBS1UsQUFDTjtjQU5KLEFBTWMsQUFDVjtjQWpDSSxBQTBCUixBQUNJLEFBTVU7O1FBQ1gsQUFDSyxBQUNKO1dBRkQsQUFFUSxBQUNQO2NBSEQsQUFHVyxBQUNWO2FBSkQsQUFJVSxBQUNUO1VBTEQsQUFLTyxBQUNOO2NBTkQsQUFNVyxBQUNWO2NBekNJLEFBa0NMLEFBQ0MsQUFNVTs7UUFDWCxBQUNLLEFBQ0o7V0FGRCxBQUVRLEFBQ1A7Y0FIRCxBQUdXLEFBQ1Y7YUFKRCxBQUlVLEFBQ1Q7VUFMRCxBQUtPLEFBQ047Y0FORCxBQU1XLEFBQ1Y7Y0FqREksQUEwQ0wsQUFDQyxBQU1VOztRQUNYLEFBQ0ssQUFDSjtX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RUksQUFBdUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgQ0FSRFMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQxLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAnJyxcbiAgICAgICAgc3BlY2lhbDogJycsXG4gICAgICAgIG5hbWU6ICfQnNCw0LvQtdC90YzQutCwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogOTk5OSxcbiAgICAgICAgcHJpY2VOZXc6IDUwMDBcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDIuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDE1LFxuICAgICAgICBzcGVjaWFsOiAn0KXRltGCINC/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQodC10YDQtdC00L3RjyDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDkxMTksXG4gICAgICAgIHByaWNlTmV3OiA2MDAwXG4gICAgfSwge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQzLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAxLFxuICAgICAgICBzcGVjaWFsOiAn0KXRltGCINC/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQktC10LvQuNC60LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAxMDAsXG4gICAgICAgIHByaWNlTmV3OiA2MFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQxLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAnJyxcbiAgICAgICAgc3BlY2lhbDogJycsXG4gICAgICAgIG5hbWU6ICfQnNC10LPQsCDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDY2NixcbiAgICAgICAgcHJpY2VOZXc6IDUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YInLFxuICAgICAgICBuYW1lOiAn0JzRltC90ZYg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAyMjAwLFxuICAgICAgICBwcmljZU5ldzogMTUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMy5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMSxcbiAgICAgICAgc3BlY2lhbDogJ9GA0L7Qt9C/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQldC60YHRgtGA0LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAxMCxcbiAgICAgICAgcHJpY2VOZXc6IDlcbiAgICB9LCB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJyxcbiAgICAgICAgZGlzY291bnQ6ICcnLFxuICAgICAgICBzcGVjaWFsOiAnJyxcbiAgICAgICAgbmFtZTogJ9Cc0LDQu9C10L3RjNC60LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiA5OTk5LFxuICAgICAgICBwcmljZU5ldzogNTAwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTUsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YIg0L/RgNC+0LTQsNC2JyxcbiAgICAgICAgbmFtZTogJ9Ch0LXRgNC10LTQvdGPINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogOTExOSxcbiAgICAgICAgcHJpY2VOZXc6IDYwMDBcbiAgICB9LCB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDMuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YIg0L/RgNC+0LTQsNC2JyxcbiAgICAgICAgbmFtZTogJ9CS0LXQu9C40LrQsCDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDEwMCxcbiAgICAgICAgcHJpY2VOZXc6IDYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJyxcbiAgICAgICAgZGlzY291bnQ6ICcnLFxuICAgICAgICBzcGVjaWFsOiAnJyxcbiAgICAgICAgbmFtZTogJ9Cc0LXQs9CwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogNjY2LFxuICAgICAgICBwcmljZU5ldzogNTAwXG4gICAgfSwge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YInLFxuICAgICAgICBuYW1lOiAn0JzRltC90ZYg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAyMjAwLFxuICAgICAgICBwcmljZU5ldzogMTUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDMuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDEsXG4gICAgICAgIHNwZWNpYWw6ICfRgNC+0LfQv9GA0L7QtNCw0LYnLFxuICAgICAgICBuYW1lOiAn0JXQutGB0YLRgNCwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogMTAsXG4gICAgICAgIHByaWNlTmV3OiA5XG4gICAgfSwge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMy5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMSxcbiAgICAgICAgc3BlY2lhbDogJ9C90L7QstC40L3QutCwJyxcbiAgICAgICAgbmFtZTogJ9C/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogMjI4LFxuICAgICAgICBwcmljZU5ldzogMTBcbiAgICB9XG5dO1xuXG52YXIgY3VycmVudENvdW50ZWQgPSAwO1xuXG52YXIgU2VhcmNoRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgY2xhc3NOYW1lPVwic2VhcmNoX19maWVsZFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9fc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY29uLXNlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBDYXJkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGhvdG9TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJylcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSB0aGlzLnByb3BzLmRpc2NvdW50LFxuICAgICAgICAgICAgICBzcGVjaWFsID0gdGhpcy5wcm9wcy5zcGVjaWFsO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tEaXNjb3VudCgpIHtcbiAgICAgICAgICAgIGlmIChkaXNjb3VudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX2Rpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkaXNjb3VudH0lPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9ICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGVja1NwZWNpYWwoKSB7XG4gICAgICAgICAgICBpZiAoc3BlY2lhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3NwZWNpYWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9ICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX3Bob3RvXCIgc3R5bGUgPSB7cGhvdG9TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja0Rpc2NvdW50KCl9XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja1NwZWNpYWwoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aGlzLnByb3BzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDQtNC+0LTQsNGC0Lgg0LTQviDQv9C+0YDRltCy0L3Rj9C90L3Rj1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19faXRlbV9fcHJpY2UtLW9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0aGlzLnByb3BzLnByaWNlT2xkfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19wcmljZS0tbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3RoaXMucHJvcHMucHJpY2VOZXd9PC9zdHJvbmc+INCz0YDQvTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCa0YPQv9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxudmFyIFNlZWRTaG9wID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXJkSW5mbzogQ0FSRFMsXG4gICAgICAgICAgICB0b3RhbENvdW50ZWQ6IGN1cnJlbnRDb3VudGVkXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGhhbmRsZVNlYXJjaDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGNhcmRJbmZvID0gQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICB2YXIgc2VhcmNoVmFsdWUgPSBlbC5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoVmFsdWUuaW5kZXhPZihzZWFyY2hRdWVyeSkgIT09IC0xOyAgLy8gcmV0dXJuIGVsZW1lbnQgaWYgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2FyZEluZm86IGNhcmRJbmZvXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhZGRUb0NhcnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDb3VudGVkICs9IDE7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvdGFsQ291bnRlZDogY3VycmVudENvdW50ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG4gICAgXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFkZEZ1bmMgPSB0aGlzLmFkZFRvQ2FydDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyTG9nby8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWNvdW50ZXI9e3RoaXMuc3RhdGUudG90YWxDb3VudGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvY2FydC5wbmdcIiBhbHQ9XCJDYXJ0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2NvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtc19fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXJkSW5mby5tYXAoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ9e2VsLmRpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWw9e2VsLnNwZWNpYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VPbGQ9e2VsLnByaWNlT2xkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlTmV3PXtlbC5wcmljZU5ld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17YWRkRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApICBcbiAgICB9IFxufSk7XG5cbnZhciBIZWFkZXJMb2dvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9sb2dvLmpwZ1wiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIFNpZGVNZW51ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudUl0ZW0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51SXRlbSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnVJdGVtIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudUl0ZW0gLz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxudmFyIFNpZGVNZW51SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TWVudSBJdGVtPC9hPlxuICAgICAgICAgICA8L2xpPlxuICAgICAgIClcbiAgIH0gXG59KTtcblxudmFyIFN3aXRjaGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIFxuICAgIHRvZ2dsZUxpc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgIHZhciBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcicpLFxuICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2l0ZW1zX19saXN0JyksXG4gICAgICAgICAgIGxpc3Q7XG4gICAgICAgXG4gICAgICAgaWYgKCh0eXBlb2Ygc3dpdGNoZXIgIT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2Ygc3dpdGNoZXIgIT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXJfX2xpc3QnKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdncmlkJyk7XG4gICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgdG9nZ2xlR3JpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgdmFyIHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyksXG4gICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19faXRlbXNfX2xpc3QnKSxcbiAgICAgICAgICAgZ3JpZDtcbiAgICAgICBcbiAgICAgICBpZiAoKHR5cGVvZiBzd2l0Y2hlciAhPSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBzd2l0Y2hlciAhPSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcl9fZ3JpZCcpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QnKTtcbiAgICAgICB9XG4gICB9LCBcbiAgICBcbiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN3aXRjaGVyXCI+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3dpdGNoZXJfX2xpc3RcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxpc3R9PlxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvbGlzdC5wbmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBhbHQ9XCJMaXN0IFZpZXdcIiAvPlxuICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3dpdGNoZXJfX2dyaWRcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUdyaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvZ3JpZC5wbmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBhbHQ9XCJHcmlkIFZpZXdcIiAvPlxuICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgKVxuICAgfSBcbn0pO1xuXG4vL3JlbmRlciBhbGxcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxTZWVkU2hvcCAvPixcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4pO1xuIl19
