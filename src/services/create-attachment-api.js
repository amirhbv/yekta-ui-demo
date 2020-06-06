import { ajaxWithJWT } from 'yekta-ui/utils';

export function createAttachmentAPI(data) {
    return ajaxWithJWT({
        method: 'POST',
        url: '/attachments/',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
    });
}
