import style from './index.module.scss'

const Container = ({ children }) => (
    <div className={style.container}>{children}</div>
);

export default Container;