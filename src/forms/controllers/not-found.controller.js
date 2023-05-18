import { createElementWithTemplate } from './componentLoader.js';

const Template = 'not-found'; // Html template.

export default async () => {
    // Creates new div element with the specified template.
    const divElement = await createElementWithTemplate(Template);

    return divElement;
};
