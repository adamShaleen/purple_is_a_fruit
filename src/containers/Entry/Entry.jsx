import React from 'react';
import './Entry.css';
import ContentBlock from '../../components/ContentBlock/ContentBlock.jsx';
import Tag from '../../components/Tag/Tag.jsx';

const Entry = ({ title, date, contentBlocks, tags }) => {
    return (
        <section className="entry">
            <section className="date_and_title_container">
                <h4>{title}</h4>&nbsp;-&nbsp;<h4>{date}</h4>
            </section>
            {contentBlocks.map(({ image, markup, text }) => 
                <ContentBlock 
                    key={`${title}_${date}_${image}}`} 
                    image={image} 
                    markup={markup} 
                    text={text}/>
            )}
            <br />
            <section className="tags_container">{tags.map(tag => <Tag tag={tag} key={tag}/>)}</section> 
        </section>
    )
}

export default Entry;