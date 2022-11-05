import React from 'react';
import { useRecoilState, atom, selector, useRecoilValue } from 'recoil';

export const CharCounter: React.FC = (props) => {
    const textState = atom({
        key: 'textState',
        default: '',
    });

    const [text, setText] = useRecoilState(textState);

    const charCountState = selector({
        key: 'charCountState',
        get: ({get}) => {
            const text = get(textState);
            return text.length;
        }
    });

    const count = useRecoilValue(charCountState);

    const onChange = (e: any) => {
        setText(e.target.value);
    }

    return <div>
        <input type="text" value={text} onChange={onChange}/>
        <div>Character count : {count}</div>
    </div>
};