import React, { FC } from "react";

import "./TestList.css";

const TestList: FC = () => {
  return (
    <div className="test-section">
            <div className="container test-container">
                <div className="wrapper" id="wrapper-main">
                    <div>
                        <div className="test-list">
                            <div className="test-list__head">
                                <span>Наименование</span>
                                <span>Длительность теста</span>
                                <span>Осталось</span>
                                <span>Группа(-ы)</span>
                            </div>
                            <div className="test-list__body">
                                <span>Список пуст</span>
                            </div>
                        </div>
                        <div className="test-list-title">
                            Список тестов
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default TestList;
