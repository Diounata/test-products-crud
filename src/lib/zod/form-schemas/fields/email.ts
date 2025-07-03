import { z } from "zod";

import { formErrors } from "../form-errors";

export const email = z.string().email(formErrors.email.invalid);
