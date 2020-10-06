import React from 'react';
import Translate from "react-translate-component";
import { faChevronLeft, faChevronRight, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Documents = () => {
    return (
        <div className="myprofile-documents">
            <div className="myprofile-documents-header">
                <Translate component="h2" content="myprofileDocumentsTitle" className="myprofile-documents-title" />
            </div>
            <div className="myprofile-documents-content">
                <div className="myprofile-documents-content-box">
                    <div className="myprofile-documents-content-box-title-box">
                        <Translate component="h3" content="myprofileDocumentsContentTitle" className="myprofile-documents-box-title" />
                    </div>
                    <div className="myprofile-documents-content-box-download-box">
                        <span className="myprofile-documents-content-box-download">
                            <Translate component="span" content="myprofileDocumentsContentDownload" />
                            <FontAwesomeIcon icon={faCloudDownloadAlt} className="myprofile-documents-content-box-icon" />
                        </span>
                    </div>
                </div>
                <div className="myprofile-documents-content-box">
                    <div className="myprofile-documents-content-box-title-box">
                        <Translate component="h3" content="myprofileDocumentsContentTitle" className="myprofile-documents-box-title" />
                    </div>
                    <div className="myprofile-documents-content-box-download-box">
                        <span className="myprofile-documents-content-box-download">
                            <Translate component="span" content="myprofileDocumentsContentDownload" />
                            <FontAwesomeIcon icon={faCloudDownloadAlt} className="myprofile-documents-content-box-icon" />
                        </span>
                    </div>
                </div>
                <div className="myprofile-documents-content-box">
                    <div className="myprofile-documents-content-box-title-box">
                        <Translate component="h3" content="myprofileDocumentsContentTitle" className="myprofile-documents-box-title" />
                    </div>
                    <div className="myprofile-documents-content-box-download-box">
                        <span className="myprofile-documents-content-box-download">
                            <Translate component="span" content="myprofileDocumentsContentDownload" />
                            <FontAwesomeIcon icon={faCloudDownloadAlt} className="myprofile-documents-content-box-icon" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="myprofile-documents-pagination">
                <div className="myprofile-documents-pagination-arrow-left-box">
                    <FontAwesomeIcon icon={faChevronLeft} className="myprofile-documents-pagination-arrow-left" />
                </div>
                <div className="myprofile-documents-pagination-pages-box">
                    <span className="myprofile-documents-pagination-page">1</span>
                    <span className="myprofile-documents-pagination-page">2</span>
                    <span className="myprofile-documents-pagination-page">3</span>
                    <span className="myprofile-documents-pagination-page">4</span>
                    <span className="myprofile-documents-pagination-page">5</span>
                </div>
                <div className="myprofile-documents-pagination-arrow-right-box">
                    <FontAwesomeIcon icon={faChevronRight} className="myprofile-documents-pagination-arrow-right" />
                </div>
            </div>
        </div>
    )
}
