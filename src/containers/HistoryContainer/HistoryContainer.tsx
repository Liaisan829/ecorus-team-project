import HistoryCard from "../../components/Cards/HistoryCard/HistoryCard";
import styles from './HistoryContainer.module.scss';

const HistoryContainer = () => {
    return (
        <div className={styles.historyContainer}>
            <HistoryCard
                address={'Казань, Кремлёвская, 88'}
                material={'Пластик: 1 кг'}
                date={'25.09.2021'}
                price={'1000'}
            />
            <HistoryCard
                address={'Казань, Кремлёвская, 88'}
                material={'Пластик: 1 кг'}
                date={'25.09.2021'}
                price={'1000'}
            />
        </div>
    );
};

export default HistoryContainer;