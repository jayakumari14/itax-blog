import actions from "./actions.js";
const {
    GET_TOKEN,
    GET_CURRENT_USER,
    GET_USER_PROFILE,
    GET_BUSINESS_PROFILE,
    /////////////////////////////////////////////////////////////////////////////////////////////////////
	LOGIN,
	LOGOUT,
	SET_VERIFICATION_DETAILS,
	VERIFY_USER,
	ITR,
	ITR_TYPE,
	PDF_DOC,
	CART_DETAIL,
	CART_UPDATE_COUNT,
	API_CART,
	LIB_PDF_DOC,
	IMG_PDF,
	FORM_16_IMPORT,
	PDF_DOC1,
	GSTIN,
	BUSINESS_DETAILS,
	PDF_DOC_REPORT,
    IS_INVOICE_SIDEBAR_OPEN,
    INVOICE_ITEMS
} = actions;

export default function reducer(state, { type, payload }) {
	console.log({type, CART_UPDATE_COUNT})
	switch (type) {
        case GET_TOKEN: return {
            ...state,
            token: payload,
        }
        case GET_CURRENT_USER: return {
            ...state,
            currentUser: payload,
        }
        case GET_USER_PROFILE: return {
            ...state,
            userProfile: payload,
        }
        case GET_BUSINESS_PROFILE: return {
            ...state,
            businessProfile: payload,
        }

        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
		case LOGIN:
			return {
				...state,
				auth: { currentUser: payload.data, token: payload.token },
			};
		case LOGOUT:
			return { ...state, auth: { currentUser: null, token: null } };
		case VERIFY_USER:
			return {
				...state,
				auth: {
					currentUser: payload.data,
					token: payload.token,
				},
			};
		case SET_VERIFICATION_DETAILS:
			return { ...state, verification: payload };
		case ITR:
			return {
				...state,
				itr: {
					...state.itr,
					...payload,
				},
			};
		case ITR_TYPE:
			return {
				...state,
				itr_type: {
					...payload,
				},
			};
		case FORM_16_IMPORT:
			return {
				...state,
				itr: {
					...state.itr,
					form16: {
						...payload,
					},
				},
			};
		case PDF_DOC:
			return {
				...state,
				pdfDoc: {
					title: payload.title,
					column: payload.column,
					data: payload.data,
				},
			};

		case PDF_DOC1:
			return {
				...state,
				pdfDoc1: {
					title1: payload.title1,
					detail1: payload.detail1,
					column1: payload.column1,
					data1: payload.data1,
				},
			};

		case LIB_PDF_DOC:
			return {
				...state,
				libraryPdfDoc: payload,
			};

		case CART_DETAIL:
			return {
				...state,
				cartDetail: payload,
			};
		
		case CART_UPDATE_COUNT:
			return {
				...state,
				cartUpdateCount: state.cartUpdateCount + 1,
			}

		case IMG_PDF:
			return {
				...state,
				imagePDF: payload,
			};

		case API_CART:
			return {
				...state,
				apiCart: payload,
			};

		case GSTIN:
			return {
				...state,
				GSTIN: payload,
			};
		case BUSINESS_DETAILS:
			return {
					...state, 
					BusinessDetails:payload
				}

		case PDF_DOC_REPORT:
			return {
				...state,
				pdfDocReport: {
                    intro: payload.intro,
                    businessName: payload.businessName,
                    pnmList: payload.pnmList,
                    owner: payload.owner,
                    rented: payload.rented,
                    loan: payload.loan,
                    data: payload.data,
                },
		};
        case IS_INVOICE_SIDEBAR_OPEN:
            return {
                ...state,
                isInvoiceSidebarOpen: state.isInvoiceSidebarOpen ? false : true
        };
        case INVOICE_ITEMS:{
            // localStorage.setItem("invoice_items",JSON.stringify(payload))
            return {
                ...state,
                invoice_items: payload
            }
        }

		default:
			return state;
	}
}
