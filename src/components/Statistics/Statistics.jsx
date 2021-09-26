import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
    //функция для рандомного цвета
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomColor = () => {
        return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)})`
    };

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li className={styles.item} style={{backgroundColor: randomColor()}} key={id}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
                ))}

            </ul>
        </section>
    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage:PropTypes.number
        })
    )
}
export default Statistics;