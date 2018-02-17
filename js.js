(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('bootstrap-jquery');

var _jquery = require('jquery.backstretch');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _Generator = require('./components/Generator.js');

var _Generator2 = _interopRequireDefault(_Generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Generator2.default, null), document.getElementById('generator'));
// import $ from 'jquery';
// window.$ = window.jQuery = $;


$(document).ready(function () {
    $.backstretch("http://liftmygram.com/img/background.jpg");
    /*
     * Live Chat
     */

    var livechat_name = '';

    var livechat_text_area = $('.livechatListArea');
    var livechat_text_list = $('.chatList');
    var livechat_text_area_height = livechat_text_area.height();

    var name_colors = ['#d4a112', '#987c2f', '#b02643', '#d72248', '#9d22d7', '#a65fc7', '#2771bc', '#1a82ed', '#28ba4a', '#136b28', '#9bc716'];

    var chat_names = ['Richard23', 'Philip', 'Rob001', 'Hill213', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis'];

    var chat_messages = ["Awesome,its rare to find working generator like this one", "Anyone tried this already?", "Does it work in NA?", "Why this is so easy lol?", "This is incredible, never thought it would work.", "I get Resource in a minute.", "shy i see survey ?", "its to protect from spamming, first try to use, i got no Survey request, but for second try i need to get Finish 1 Survey", "OMG!", "LOL!", "ROFL!", "Real", "gayyyy", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much resource you've generated so far?", "what about surveys on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can imagine this must be annoying for the one who play with skill", "Is this ban secure?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "anyone up for a game?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea which skin i should get", "so happy i found this", "you guys watch nightblue?", "I have seen this generator on hotshot stream i think", "just wow", "When do I get my resource ??", "a friend told me about this", "thanks to whoever spams this website Finish my survey now", "how can finish this survey quickly?", "so far I am cool with this generaor", "can I get off this survey easily?", "bye guys, already finish my survey, and resources generated successfully", "okay i am stacked now with survey", "finished survey is easy, if you fill using valid data", "incredible", "three minutes ago cannot get fast resource, now i have and its works perfectly", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking generator is real", "first time ever this makes sense", "Does everyone have a different survey ", "got my resource in 5 minutes only :D", "what happen after finish a survey", "after finish a survey you'll get the resiurce ", "today is lucky day", "this is the best generator because we all have more than a chance", "i think everyone can do a survey quickly", "can we get more than one survey ?, first time success, and want to try for my sister account", "yes", "abselutely", "I got all resource for my girlfriend too"];

    setInterval(function () {
        add_livechat_msg(chat_names[_lodash2.default.random(0, chat_names.length - 1)], name_colors[_lodash2.default.random(0, name_colors.length - 1)], chat_messages[_lodash2.default.random(0, chat_messages.length - 1)]);
    }, _lodash2.default.random(500, 4500));

    $('.livechatSubmtBtn').click(function () {
        if (livechat_name == '') {
            $('.livechatNameBox').show();
        } else {
            add_livechat_msg(livechat_name, '#136b28', $('.livechatMsg').val());
            $('.livechatMsg').val('');
        }
    });

    $('.livechatNicknameBtn').click(function () {
        var name_input = $('#livechat_name');
        if (name_input.val() != '') {
            livechat_name = name_input.val();
            $(this).parents('.livechatNameBox').hide();
        } else {
            (0, _sweetalert2.default)("Error", "Please enter a nickname.", "error");
        }
    });

    $(".livechatName").on("keypress", function () {
        console.log("Handler for .keypress() called.");
    });

    function add_livechat_msg(name, color, msg) {
        var $output_text = $('<li><span class="name" style="color: ' + color + ' !important;">' + name + '</span>: <span class="message">' + msg + '</span></li>');
        $output_text.hide().appendTo(livechat_text_list).fadeIn();
        livechat_text_area.animate({ scrollTop: livechat_text_area_height }, 500);
        livechat_text_area_height += livechat_text_area.height();
    }
});

},{"./components/Generator.js":2,"bootstrap-jquery":"bootstrap-jquery","jquery.backstretch":20,"lodash":"lodash","react":"react","react-dom":"react-dom","sweetalert":"sweetalert"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _bootbox = require('bootbox');

var _bootbox2 = _interopRequireDefault(_bootbox);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _flickity = require('flickity');

var _flickity2 = _interopRequireDefault(_flickity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.$ = window.jQuery = _jquery2.default;


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var Generator = function (_Component) {
    _inherits(Generator, _Component);

    function Generator(props) {
        _classCallCheck(this, Generator);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Generator).call(this, props));

        var self = _this;
        self.state = {
            selected_device: null,
            username: null,
            progress: 0,
            gold: null,
            gems: null,
            loading: false,
            users: _lodash2.default.random(120, 340)
        };
        setInterval(function () {
            self.setState({
                users: _lodash2.default.random(120, 340)
            });
        }, _lodash2.default.random(1500, 3000));
        return _this;
    }
