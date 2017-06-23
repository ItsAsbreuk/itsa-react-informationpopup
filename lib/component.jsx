"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 15.0.0
*/

const React = require('react'),
    PropTypes = require("prop-types"),
    MAIN_CLASS = 'itsa-informationpopup',
    LABEL_CLASS = MAIN_CLASS+'-icon',
    POPUP_NODE_CLASS = MAIN_CLASS+'-popup',
    HIDDEN_CLASS = MAIN_CLASS+'-hidden';

class Component extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.state = {
            hidden: true
        };
        instance.handleMouseEnter = instance.handleMouseEnter.bind(instance);
        instance.handleMouseLeave = instance.handleMouseLeave.bind(instance);
    }

    handleMouseEnter() {
        this.setState({hidden: false});
    }

    handleMouseLeave() {
        this.setState({hidden: true});
    }

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        let contentClass, popupNode;
        const instance = this,
            props = instance.props,
            popupHTML = props.popupHTML,
            popupClass = POPUP_NODE_CLASS + (instance.state.hidden ? ' '+HIDDEN_CLASS : '');

        if (props.iconStyle) {
            contentClass = LABEL_CLASS;
        }
        if (popupHTML) {
            popupNode = <div className={popupClass} dangerouslySetInnerHTML={{__html: popupHTML}} />;
        }
        else {
            popupNode = <div className={popupClass}>{props.popup}</div>;
        }
        return (
            <div className={MAIN_CLASS}>
                <div className={contentClass} onMouseEnter={instance.handleMouseEnter} onMouseLeave={instance.handleMouseLeave} >{props.children}</div>
                {popupNode}
            </div>
        );
    }
}

Component.propTypes = {
    /**
     * The Component its children
     *
     * @property children
     * @type String || Object || Array
     * @since 15.0.0
    */

    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    iconStyle: PropTypes.bool
};

Component.defaultProps = {
    iconStyle: true
};

module.exports = Component;
