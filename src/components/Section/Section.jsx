import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = (props) => {
    const { title, children } = props;
    return ( 
    <section className={css.title} >
			<div>
				<h2>{title}</h2>
				{children}
			</div>
		</section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
export default Section;