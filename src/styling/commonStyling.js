import {red} from "@material-ui/core/colors";

export function getStyling() {
    return {
        card: {
            root: {
                padding: 20,
            },
            media: {
                height: 0,
                paddingTop: '15%',
            },
            avatar: {
                backgroundColor: red[500],
            },
            sub: {
                fontSize: '18px',
                fontWeight: 'bold'
            }
        },
        header: {
            position: 'relative'
        }
    };
}
