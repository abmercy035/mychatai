
import PropTypes from 'prop-types';
import "./component_styles/messagebox.css";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useRemark } from 'react-remark';
import rehypeTwoslash from 'rehype-twoslash'
import rehypeStarryNight from 'rehype-starry-night'
export default function MessageBox({ text, role }) {
    return <div className={`messagebox_wrapper ${role}-wrapper`}>
                <span className='role'>{`<${role}/>`}</span>

        <div className={`messagebox_text`}>
            <Markdown remarkPlugins={[[remarkGfm, rehypeHighlight,useRemark, rehypeTwoslash, rehypeStarryNight]]}>
                {text}
            </Markdown>
        </div>
    </div >;
}


MessageBox.propTypes = {
    text: PropTypes.string.isRequired,
    role: PropTypes.oneOf(['user', 'bot']).isRequired,
};