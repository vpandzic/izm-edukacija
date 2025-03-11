import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDate = ({postdate}) => {
    return (
        new Date(postdate).toLocaleDateString("hr-HR")
    )
};

export default PostDate;