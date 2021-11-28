import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    qualities = qualities.map((m) => getQuality(m));
    if (!isLoading) {
        return (
            <>
                {qualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </>
        );
    } else return "LOADING...";
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
